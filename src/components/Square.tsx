import type { MouseEventHandler } from "react";
import type { TSquare } from "../types/TSquare";
import classNames from "classnames";

type SquareProps = {
  value: TSquare;
  winner?: boolean;
  onSquareClick: MouseEventHandler;
};

const Square = ({ value, winner = false, onSquareClick }: SquareProps) => {
  const squareClasses = classNames("square", {
    "square--default": !winner,
    "square--winning": winner,
  });
  return (
    <button type="button" onClick={onSquareClick} className={squareClasses}>
      {value}
    </button>
  );
}

export default Square;
