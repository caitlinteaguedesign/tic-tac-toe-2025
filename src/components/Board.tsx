import type { TSquare } from "../types/TSquare";
import calculateWinner from "../util/calculateWinner";
import Square from "./Square";

type BoardProps = {
  xIsNext: boolean;
  squares: TSquare[];
  onMove: Function;
};

const Board = ({ xIsNext, squares, onMove }: BoardProps) => {
  const winningSquares = calculateWinner(squares) || false;

  function handleClick(i: number) {
    if (winningSquares || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onMove(nextSquares);
  }

  return (
    <div className="card board-layout">
      <div className="board">
        {squares.map((_square, i) => (
          <Square
            key={`square_${i}`}
            id={i}
            value={squares[i]}
            winner={
              winningSquares &&
              (i === winningSquares[0] ||
                i === winningSquares[1] ||
                i === winningSquares[2])
            }
            onSquareClick={() => handleClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
