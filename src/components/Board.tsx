import { type TSquare } from "../types/TSquare";
import Square from "./Square";

type BoardProps = {
  squares: TSquare[];
};

const Board = ({ squares }: BoardProps) => {
  return (
    <div className="card board-layout">
      <div className="board">
        {squares.map((_square, i) => (
          <Square key={`square_${i}`} id={i} value={squares[i]} />
        ))}
      </div>
    </div>
  );
};

export default Board;
