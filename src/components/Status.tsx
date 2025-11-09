import { useContext } from "react";
import classNames from "classnames";
import { GameState } from "@/types/TGameState";
import { Mark } from "@/types/TSquare";
import { GameStateContext } from "@/contexts/GameState";

const Status = () => {
  const { mode, xIsNext } = useContext(GameStateContext);

  const cardClasses = classNames("card status-layout status-card", {
    tie: mode === GameState.TIE,
    winner: mode === GameState.WIN,
  });

  const currentPlayer = xIsNext ? Mark.O : Mark.X;
  const nextPlayer = xIsNext ? Mark.X : Mark.O;

  let statusMessage = "Your move player X";

  switch (mode) {
    case GameState.PLAY:
      statusMessage = `Your move player ${nextPlayer}`;
      break;
    case GameState.TIE:
      statusMessage = "A strange game. The only winning move is not to play.";
      break;
    case GameState.WIN:
      statusMessage = `Player ${currentPlayer}, wouldn't you prefer a good game of chess?`;
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
