import { useState } from "react";
import type { TSquare } from "../types/TSquare";

import Button from "../components/Button";
import Board from "../components/Board";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: TSquare[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  return (
    <div className="game-layout">
      {/* moves and new game */}
      <div className="card controls-layout">
        <h2 className="type-interface mb-4">Moves</h2>
        <div className="flex flex-col gap-2 pb-4 items-center card__separator-bottom">
          <Button label="Undo" style="primary" arrow="ccw" />
          <Button label="Redo" style="primary" arrow="cw" />
        </div>
        <div className="flex justify-center card__separator-top pt-8 pb-4">
          <Button label="New Game" style="primary" />
        </div>
      </div>
      {/* status */}
      <div className="card status-layout text-center text-white">Status</div>
      {/* board */}
      <div className="card board-layout">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      {/* timer */}
      <div className="card timer-layout">
        <div className="type-interface">Timer</div>
      </div>
      {/* history */}
      <div className="card history-layout flex flex-col items-center">
        <h2 className="type-interface mb-4">History</h2>
        <ol className="flex flex-col gap-2 max-w-60">
          <li>
            <Button label="Go to move #" style="secondary" arrow="right" full />
          </li>
          <li>
            <Button label="Go to move #" style="secondary" arrow="right" full />
          </li>
          <li>
            <Button label="Go to move #" style="secondary" arrow="right" full />
          </li>
          <li>
            <Button label="Go to move #" style="secondary" arrow="right" full />
          </li>
          <li>
            <Button label="Go to move #" style="secondary" arrow="right" full />
          </li>
          <li>
            <Button label="Go to move #" style="secondary" arrow="right" full />
          </li>
          <li>
            <Button label="Go to move #" style="secondary" arrow="right" full />
          </li>
          <li>
            <Button label="Go to move #" style="secondary" arrow="right" full />
          </li>
          <li>
            <Button label="# move(s) played" style="secondary" full disabled />
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Game;
