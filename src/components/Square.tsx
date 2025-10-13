import type { MouseEventHandler } from "react";
import type { TSquare } from "../types/TSquare";

type SquareProps = {
  value: TSquare;
  onSquareClick: MouseEventHandler;
};

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button
      type="button"
      onClick={onSquareClick}
      className="square square--default"
    >
      {value}
    </button>
  );
}

export default Square;
