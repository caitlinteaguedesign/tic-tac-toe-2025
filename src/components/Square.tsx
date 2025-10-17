import type { MouseEventHandler } from "react";
import type { TSquare } from "../types/TSquare";
import classNames from "classnames";

type SquareProps = {
  value: TSquare;
  winning?: boolean;
  onSquareClick: MouseEventHandler;
};

const Square = ({ value, winning = false, onSquareClick }: SquareProps) => {
  const squareClasses = classNames("square", {
    "square--default": !winning,
    "square--winning": winning,
  });
  return (
    <button type="button" onClick={onSquareClick} className={squareClasses}>
      {value}
    </button>
  );
}

export default Square;
