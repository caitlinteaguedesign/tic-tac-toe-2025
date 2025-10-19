import { useState } from "react";
import type { TSquare } from "../types/TSquare";
import calculateTie from "../util/calculateTie";
import calculateWinner from "../util/calculateWinner";
import isXNext from "../util/isXNext";
import Board from "../components/Board";
import Controls from "../components/Controls";
import History from "../components/History";
import Status from "../components/Status";
import StopWatch from "../components/StopWatch";

const Game = () => {
  const [history, setHistory] = useState<TSquare[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [status, setStatus] = useState<string>("Your move player X");
  const [resetTimerKey, setResetTimerKey] = useState<number>(0);
  const [timerState, toggleTimer] = useState<boolean>(true);
  const xIsNext = isXNext(currentMove);
  const currentSquares = history[currentMove];

  const makeMove = (nextSquares: TSquare[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    const nextMove = nextHistory.length - 1;
    setHistory(nextHistory);
    setCurrentMove(nextMove);
    updateGameStatus(nextHistory[nextMove], nextMove);
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

  const resetGame = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setStatus("Your move player X");
    toggleTimer(true);
    setResetTimerKey((prevKey) => prevKey + 1);
  };

  const goToMove = (move: number) => {
    setCurrentMove(move);
    updateGameStatus(history[move], move);
  };

  const updateGameStatus = (squares: TSquare[], move: number) => {
    setStatus(`Your move player ${isXNext(move) ? "X" : "O"}`);
    toggleTimer(true);

    const winningSquares = calculateWinner(squares);

    if (winningSquares) {
      const winnerName = squares[winningSquares[0]];
      setStatus(
        `Player ${winnerName}, wouldn't you prefer a good game of chess?`
      );
      toggleTimer(false);
    } else {
      if (calculateTie(squares)) {
        setStatus("A strange game. The only winning move is not to play.");
        toggleTimer(false);
      }
    }
  };

  return (
    <div className="game-layout">
      <Controls
        currentMove={currentMove}
        historyLength={history.length}
        undo={undoMove}
        redo={redoMove}
        reset={resetGame}
      />
      <Status status={status} />
      <Board xIsNext={xIsNext} squares={currentSquares} onMove={makeMove} />
      <StopWatch key={resetTimerKey} isRunning={timerState} />
      <History
        currentMove={currentMove}
        history={history}
        goToMove={goToMove}
      />
    </div>
  );
};

export default Game;
