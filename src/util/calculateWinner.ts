import type { TSquare } from "../types/TSquare";

const calculateWinner = (squares: TSquare[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // checks each line variation
  for (let i = 0; i < lines.length; i++) {
    // pulls out the values in each array
    const [a, b, c] = lines[i];
    // checks if the value of square a is filled in and that it matches the values in b and c
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // return the indexes of the winning squares
      return [a, b, c];
    }
  }
  // no winner found
  return false;
};

export default calculateWinner;
