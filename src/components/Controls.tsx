import type { MouseEventHandler } from "react";
import Button from "./Button";

type ControlsProps = {
  currentMove: number;
  historyLength: number;
  undo: MouseEventHandler;
  redo: MouseEventHandler;
  reset: MouseEventHandler;
};

const Controls = ({
  currentMove,
  historyLength,
  undo,
  redo,
  reset,
}: ControlsProps) => {
  return (
    <div className="card controls-layout">
      <h2 className="type-interface mb-4">Moves</h2>
      <div className="moves-layout card__separator-bottom">
        <Button
          label="Undo"
          style="primary"
          arrow="ccw"
          disabled={currentMove <= 1}
          onButtonClick={undo}
        />
        <Button
          label="Redo"
          style="primary"
          arrow="cw"
          disabled={currentMove === historyLength - 1}
          onButtonClick={redo}
        />
      </div>
      <div className="new-game-layout card__separator-top">
        <Button label="New Game" style="primary" onButtonClick={reset} />
      </div>
    </div>
  );
};

export default Controls;
