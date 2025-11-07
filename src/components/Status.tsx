import { useContext } from "react";
import classNames from "classnames";
import { GameState } from "../types/TGameState";
import { GameStateContext } from "../util/gameStateContext";

const Status = () => {
  const gameMode = useContext(GameStateContext);

  const cardClasses = classNames("card status-layout status-card", {
    tie: gameMode === GameState.TIE,
    winner: gameMode === GameState.WIN,
  });

  let statusMessage = "Your move player X";

  switch (gameMode) {
    case GameState.PLAY:
      statusMessage = "Your move player [?]";
      break;
    case GameState.TIE:
      statusMessage = "A strange game. The only winning move is not to play.";
      break;
    case GameState.WIN:
      statusMessage = "Player [?], wouldn't you prefer a good game of chess?";
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
