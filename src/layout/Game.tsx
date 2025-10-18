import { useState } from "react";
import type { TSquare } from "../types/TSquare";

import Button from "../components/Button";
import Board from "../components/Board";
import calculateWinner from "../util/calculateWinner";
import calculateTie from "../util/calculateTie";
import isXNext from "../util/isXNext";
import StopWatch from "../components/StopWatch";

const Game = () => {
  const [history, setHistory] = useState<TSquare[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [status, setStatus] = useState<string>("Your move player X");
  const [timerState, toggleTimer] = useState<boolean>(true);
  const xIsNext = isXNext(currentMove);
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: TSquare[]) => {
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
      {/* moves and new game */}
      <div className="card controls-layout">
        <h2 className="type-interface mb-4">Moves</h2>
        <div className="moves-layout card__separator-bottom">
          <Button
            label="Undo"
            style="primary"
            arrow="ccw"
            disabled={currentMove <= 1}
            onButtonClick={() => undoMove()}
          />
          <Button
            label="Redo"
            style="primary"
            arrow="cw"
            disabled={currentMove === history.length - 1}
            onButtonClick={() => redoMove()}
          />
        </div>
        <div className="new-game-layout card__separator-top">
          <Button
            label="New Game"
            style="primary"
            onButtonClick={() => resetGame()}
          />
        </div>
      </div>
      {/* status */}
      <div className="card status-layout text-center text-white">{status}</div>

      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <StopWatch isRunning={timerState} />

      {/* history */}
      <div className="card history-layout">
        <h2 className="type-interface mb-4">History</h2>
        {history.length > 1 ? (
          <ol className="flex flex-col gap-2 max-w-60 pb-1">
            {history.slice(1).map((_move, i) => (
              <li key={`move-li_${i}`}>
                {i === currentMove - 1 ? (
                  <Button
                    label={`Viewing Move ${currentMove}`}
                    style="secondary"
                    full
                    disabled
                  />
                ) : (
                  <Button
                    label={`Go to Move ${i + 1}`}
                    onButtonClick={() => goToMove(i + 1)}
                    style="secondary"
                    arrow="right"
                    full
                  />
                )}
              </li>
            ))}
          </ol>
        ) : (
          <p className="pb-1">No moves yet.</p>
        )}
      </div>
    </div>
  );
};

export default Game;
