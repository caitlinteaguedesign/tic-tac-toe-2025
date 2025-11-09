import { useContext } from "react";
import classNames from "classnames";
import { Mark, type TSquare } from "../types/TSquare";
import { GameState } from "../types/TGameState";
import { GameStateContext } from "../util/GameStateContext";
import changeFocus from "../util/changeFocus";

type SquareProps = {
  id: number;
  value: TSquare;
};

const Square = ({ id, value }: SquareProps) => {
  const { mode, xIsNext, current, winnerIds, onMove } =
    useContext(GameStateContext);
  const squareClasses = classNames("square", {
    "square--default":
      id !== winnerIds[0] && id !== winnerIds[1] && id !== winnerIds[2],
    "square--winning":
      id === winnerIds[0] || id === winnerIds[1] || id === winnerIds[2],
  });
  const handleClick = (id: number) => {
    const nextSquares = current.slice();
    if (xIsNext) {
      nextSquares[id] = Mark.X;
    } else {
      nextSquares[id] = Mark.O;
    }
    onMove(nextSquares);
  };
  return (
    <button
      id={`square_${id}`}
      type="button"
      onClick={() => handleClick(id)}
      disabled={mode !== GameState.PLAY || (value && false)}
      onKeyDown={(e) => changeFocus(e, "square_", id)}
      className={squareClasses}
    >
      <span className="square__value">{value}</span>
    </button>
  );
};

export default Square;
