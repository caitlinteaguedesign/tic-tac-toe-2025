import type { MouseEventHandler } from "react";
import type { TSquare } from "../types/TSquare";
import classNames from "classnames";
import changeFocus from "../util/changeFocus";

type SquareProps = {
  id: number;
  value: TSquare;
  winner?: boolean;
  disabled: boolean;
  onSquareClick: MouseEventHandler;
};

const Square = ({
  id,
  value,
  winner = false,
  disabled = false,
  onSquareClick,
}: SquareProps) => {
  const squareClasses = classNames("square", {
    "square--default": !winner,
    "square--winning": winner,
  });
  return (
    <button
      id={`square_${id}`}
      type="button"
      onClick={onSquareClick}
      disabled={disabled}
      onKeyDown={(e) => changeFocus(e, "square_", id)}
      className={squareClasses}
    >
      <span className="square__value">{value}</span>
    </button>
  );
};

export default Square;
