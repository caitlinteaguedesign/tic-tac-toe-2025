import { useState } from "react";
import type { TSquare } from "@/types/TSquare";
import { GameState, type TGameState } from "@/types/TGameState";
import { GameStateContext } from "@/contexts/GameState";
import calculateTie from "@utils/calculateTie";
import calculateWinner from "@utils/calculateWinner";
import isXNext from "@utils/isXNext";
import Board from "@components/Board";
import Controls from "@components/Controls";
import History from "@components/History";
import Status from "@components/Status";
import StopWatch from "@components/StopWatch";
import { INITIAL_HISTORY, INITIAL_WINNER_IDS } from "@utils/initial.constants";

const Game = () => {
  const [history, setHistory] = useState<TSquare[][]>(INITIAL_HISTORY);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [gameState, setGameState] = useState<TGameState>(GameState.PLAY);
  const [timerKey, setTimerKey] = useState<number>(0);
  const [winnerIds, setWinnerIds] = useState<number[]>(INITIAL_WINNER_IDS);
  const currentSquares = history[currentMove];

  const makeMove = (nextSquares: TSquare[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    const nextMove = nextHistory.length - 1;
    setHistory(nextHistory);
    setCurrentMove(nextMove);
    updateGameStatus(nextHistory[nextMove]);
  };

  const gameStateContextValue = {
    mode: gameState,
    xIsNext: isXNext(currentMove),
    current: currentSquares,
    winnerIds: winnerIds,
    onMove: makeMove,
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
    const winner = calculateWinner(squares);
    if (winner) {
      setGameState(GameState.WIN);
      setWinnerIds(winner);
    } else if (calculateTie(squares)) {
      setGameState(GameState.TIE);
    } else {
      setGameState(GameState.PLAY);
      setWinnerIds(INITIAL_WINNER_IDS);
    }
  };

  const resetGame = () => {
    setHistory(INITIAL_HISTORY);
    setCurrentMove(0);
    setGameState(GameState.PLAY);
    setWinnerIds(INITIAL_WINNER_IDS);
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
        <Board squares={currentSquares} />
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
