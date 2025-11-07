export const Mark = {
  X: "X",
  O: "O",
} as const;

export type TSquare = (typeof Mark)[keyof typeof Mark];
