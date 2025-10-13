import Button from "../components/Button";

function Game() {
  return (
    <div className="game-layout">
      {/* moves and new game */}
      <div className="card controls-layout">
        <h2 className="type-interface mb-4">Moves</h2>
        <div className="flex flex-col gap-2 items-center card__separator-bottom">
          <Button label="Undo" style="primary" arrow="ccw" />
          <Button label="Redo" style="primary" arrow="cw" />
        </div>
        <div className="flex justify-center card__separator-top pt-8 pb-4">
          <Button label="New Game" style="primary" />
        </div>
      </div>
      {/* status */}
      <div className="card row-start-1 text-center text-white">Status</div>
      {/* board */}
      <div className="card row-start-2">Board</div>
      {/* timer */}
      <div className="card row-start-3">
        <div className="type-interface">Timer</div>
      </div>
      {/* history */}
      <div className="card row-span-3">
        <h2 className="type-interface mb-4">History</h2>
        <ol className="flex flex-col gap-2">
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
