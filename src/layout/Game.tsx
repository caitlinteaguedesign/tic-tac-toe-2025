import Button from "../components/Button";

function Game() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 grid-flow-col gap-3">
      <div className="card row-span-3 min-w-[166px]">
        <h2 className="type-interface">Moves</h2>
        <Button label="Undo" style="primary" arrow="counter-clockwise" />
        <Button label="Redo" style="primary" arrow="clockwise" />
        <Button label="New Game" style="primary" />
      </div>
      <div className="card row-start-1">Status</div>
      <div className="card row-start-2">Board</div>
      <div className="card row-start-3">
        <div className="type-interface">Timer</div>
      </div>
      <div className="card row-span-3 min-w-[166px]">
        <h2 className="type-interface">History</h2>
        <Button label="Go to move #" style="secondary" arrow="right" />
        <Button label="# move(s) played" style="secondary" disabled />
      </div>
    </div>
  );
}

export default Game;
