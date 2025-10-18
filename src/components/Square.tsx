import type { MouseEventHandler } from "react";
import type { TSquare } from "../types/TSquare";
import classNames from "classnames";
import changeFocus from "../util/changeFocus";

type SquareProps = {
  id: number;
  value: TSquare;
  winner?: boolean;
  onSquareClick: MouseEventHandler;
};

const Square = ({ id, value, winner = false, onSquareClick }: SquareProps) => {
  const squareClasses = classNames("square", {
    "square--default": !winner,
    "square--winning": winner,
  });
  return (
    <button
      id={`square_${id}`}
      type="button"
      onClick={onSquareClick}
      onKeyDown={(e) => changeFocus(e, "square_", id)}
      className={squareClasses}
    >
      {value}
    </button>
  );
};

export default Square;
