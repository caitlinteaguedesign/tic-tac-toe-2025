import { useContext, type MouseEventHandler } from "react";
import classNames from "classnames";
import type { TSquare } from "../types/TSquare";
import { GameState } from "../types/TGameState";
import { GameStateContext } from "../util/GameStateContext";
import changeFocus from "../util/changeFocus";

type SquareProps = {
  id: number;
  value: TSquare;
  winner?: boolean;
  onSquareClick: MouseEventHandler;
};

const Square = ({ id, value, winner = false, onSquareClick }: SquareProps) => {
  const { mode } = useContext(GameStateContext);
  // todo get the winner ids
  const squareClasses = classNames("square", {
    "square--default": !winner, // default
    "square--winning": winner, // only if has an id in the winners
  });
  return (
    <button
      id={`square_${id}`}
      type="button"
      onClick={onSquareClick}
      disabled={mode !== GameState.PLAY || (value && false)}
      onKeyDown={(e) => changeFocus(e, "square_", id)}
      className={squareClasses}
    >
      <span className="square__value">{value}</span>
    </button>
  );
};

export default Square;
