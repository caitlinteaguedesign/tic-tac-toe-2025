import type { TSquare } from "../types/TSquare";

const calculateTie = (squares: TSquare[]) => {
  return squares.every((item) => item !== null);
};

export default calculateTie;
