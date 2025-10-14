import type { TSquare } from "../types/TSquare";
import calculateWinner from "../util/calculateWinner";
import Square from "./Square";

type BoardProps = {
  xIsNext: boolean;
  squares: TSquare[];
  onPlay: Function;
};

function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  return (
    <div className="board">
      {squares.map((_square, i) => (
        <Square
          key={`square_${i}`}
          value={squares[i]}
          winning={i === 0 || i === 1 || i === 2}
          onSquareClick={() => handleClick(i)}
        />
      ))}
    </div>
  );
}

export default Board;
