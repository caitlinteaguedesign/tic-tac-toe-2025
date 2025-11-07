import { useState } from "react";
import { Mark, type TSquare } from "../types/TSquare";
import { GameState, type TGameState } from "../types/TGameState";
import calculateTie from "../util/calculateTie";
import calculateWinner from "../util/calculateWinner";
import isXNext from "../util/isXNext";
import Board from "../components/Board";
import Controls from "../components/Controls";
import History from "../components/History";
import Status from "../components/Status";
import StopWatch from "../components/StopWatch";

const INITIAL_STATUS = "Your move player X";
const INITIAL_HISTORY = [Array(9).fill(null)];

const Game = () => {
  const [history, setHistory] = useState<TSquare[][]>(INITIAL_HISTORY);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [status, setStatus] = useState<string>(INITIAL_STATUS);
  const [gameState, setGameState] = useState<TGameState>(GameState.PLAY);
  const [timerKey, setTimerKey] = useState<number>(0);
  const xIsNext = isXNext(currentMove);
  const currentSquares = history[currentMove];

  // todo: this is used by squares to update the history
  const makeMove = (nextSquares: TSquare[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    const nextMove = nextHistory.length - 1;
    setHistory(nextHistory);
    setCurrentMove(nextMove);
    // runs after every move and transversing the history
    updateGameStatus(nextHistory[nextMove], nextMove);
  };

  const goToMove = (move: number) => {
    setCurrentMove(move);
    updateGameStatus(history[move], move);
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

  // todo: maybe the text can go into status block if winners, next player, and game state are
  // exposed in use context anyway, like the sqaurs will need
  // this function just needs to validate the current history
  const updateGameStatus = (squares: TSquare[], move: number) => {
    setStatus(`Your move player ${isXNext(move) ? Mark.X : Mark.O}`);
    setGameState(GameState.PLAY);

    const winningSquares = calculateWinner(squares);

    if (winningSquares) {
      const winnerName = squares[winningSquares[0]];
      setStatus(
        `Player ${winnerName}, wouldn't you prefer a good game of chess?`
      );
      setGameState(GameState.WIN);
    } else {
      if (calculateTie(squares)) {
        setStatus("A strange game. The only winning move is not to play.");
        setGameState(GameState.TIE);
      }
    }
  };

  const resetGame = () => {
    setHistory(INITIAL_HISTORY);
    setCurrentMove(0);
    setStatus(INITIAL_STATUS);
    setGameState(GameState.PLAY);
    setTimerKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="game-layout">
      <Controls
        disableUndo={currentMove <= 1}
        disableRedo={currentMove === history.length - 1}
        undo={undoMove}
        redo={redoMove}
        reset={resetGame}
      />
      <Status message={status} gameState={gameState} />
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
  );
};

export default Game;
