import { createContext } from "react";
import { GameState, type TGameState } from "../types/TGameState";

type GameStateContextProps = {
  mode: TGameState;
  xIsNext: boolean;
};

export const GameStateContext = createContext<GameStateContextProps>({
  mode: GameState.PLAY,
  xIsNext: true,
});
