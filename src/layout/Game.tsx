import { useState } from "react";
import type { TSquare } from "../types/TSquare";
import { GameStateContext } from "../util/GameStateContext";
import { GameState, type TGameState } from "../types/TGameState";
import calculateTie from "../util/calculateTie";
import calculateWinner from "../util/calculateWinner";
import isXNext from "../util/isXNext";
import Board from "../components/Board";
import Controls from "../components/Controls";
import History from "../components/History";
import Status from "../components/Status";
import StopWatch from "../components/StopWatch";

const INITIAL_HISTORY = [Array(9).fill(null)];

const Game = () => {
  const [history, setHistory] = useState<TSquare[][]>(INITIAL_HISTORY);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [gameState, setGameState] = useState<TGameState>(GameState.PLAY);
  const [timerKey, setTimerKey] = useState<number>(0);
  const xIsNext = isXNext(currentMove);
  const currentSquares = history[currentMove];

  const gameStateContextValue = {
    mode: gameState,
    xIsNext: isXNext(currentMove),
  };

  // todo: this is used by squares to update the history
  const makeMove = (nextSquares: TSquare[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    const nextMove = nextHistory.length - 1;
    setHistory(nextHistory);
    setCurrentMove(nextMove);
    // runs after every move and transversing the history
    updateGameStatus(nextHistory[nextMove]);
  };

  const goToMove = (move: number) => {
    setCurrentMove(move);
    updateGameStatus(history[move]);
  };

  const undoMove = () => {
    if (currentMove > 1) {
      goToMove(currentMove - 1);
    }
  };

  const redoMove = () => {
    if (currentMove < history.length - 1) {
      goToMove(currentMove + 1);
    }
  };

  const updateGameStatus = (squares: TSquare[]) => {
    if (calculateWinner(squares)) {
      setGameState(GameState.WIN);
    } else if (calculateTie(squares)) {
      setGameState(GameState.TIE);
    } else {
      setGameState(GameState.PLAY);
    }
  };

  const resetGame = () => {
    setHistory(INITIAL_HISTORY);
    setCurrentMove(0);
    setGameState(GameState.PLAY);
    setTimerKey((prevKey) => prevKey + 1);
  };

  return (
    <GameStateContext value={gameStateContextValue}>
      <div className="game-layout">
        <Controls
          disableUndo={currentMove <= 1}
          disableRedo={currentMove === history.length - 1}
          undo={undoMove}
          redo={redoMove}
          reset={resetGame}
        />
        <Status />
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          gameState={gameState}
          handleMove={makeMove}
        />
        <StopWatch key={timerKey} isRunning={gameState === GameState.PLAY} />
        <History
          currentMove={currentMove}
          history={history}
          goToMove={goToMove}
        />
      </div>
    </GameStateContext>
  );
};

export default Game;
