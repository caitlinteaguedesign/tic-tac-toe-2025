import { GameState, type TGameState } from "../types/TGameState";
import classNames from "classnames";

type StatusProps = {
  message: string;
  gameState: TGameState;
};

const Status = ({ message, gameState }: StatusProps) => {
  const cardClasses = classNames("card status-layout status-card", {
    tie: gameState === GameState.TIE,
    winner: gameState === GameState.WIN,
  });

  return (
    <div className={cardClasses}>
      <p className="text">{message}</p>
    </div>
  );
};

export default Status;
