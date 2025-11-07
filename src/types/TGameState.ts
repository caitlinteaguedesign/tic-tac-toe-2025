export const GameState = {
  PLAY: "play",
  TIE: "tie",
  WIN: "winner",
} as const;

export type TGameState = (typeof GameState)[keyof typeof GameState];
