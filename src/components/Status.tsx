import { useContext } from "react";
import classNames from "classnames";
import { GameState } from "../types/TGameState";
import { Mark } from "../types/TSquare";
import { GameStateContext } from "../util/GameStateContext";

const Status = () => {
  const { mode, xIsNext } = useContext(GameStateContext);

  const cardClasses = classNames("card status-layout status-card", {
    tie: mode === GameState.TIE,
    winner: mode === GameState.WIN,
  });

  let statusMessage = "Your move player X";

  switch (mode) {
    case GameState.PLAY:
      statusMessage = `Your move player ${xIsNext ? Mark.X : Mark.O}`;
      break;
    case GameState.TIE:
      statusMessage = "A strange game. The only winning move is not to play.";
      break;
    case GameState.WIN:
      statusMessage = `Player ${
        xIsNext ? Mark.O : Mark.X
      }, wouldn't you prefer a good game of chess?`;
      break;
    default:
      break;
  }

  return (
    <div className={cardClasses}>
      <p className="text">{statusMessage}</p>
    </div>
  );
};

export default Status;
