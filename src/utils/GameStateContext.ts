import { createContext } from "react";
import { GameState, type TGameState } from "@/types/TGameState";
import { INITIAL_HISTORY, INITIAL_WINNER_IDS } from "@utils/initial.constants";
import type { TSquare } from "@/types/TSquare";

type GameStateContextProps = {
  mode: TGameState;
  xIsNext: boolean;
  current: TSquare[];
  winnerIds: number[];
  onMove: (nextSquares: TSquare[]) => void;
};

export const GameStateContext = createContext<GameStateContextProps>({
  mode: GameState.PLAY,
  xIsNext: true,
  current: INITIAL_HISTORY[0],
  winnerIds: INITIAL_WINNER_IDS,
  onMove: () => {},
});
