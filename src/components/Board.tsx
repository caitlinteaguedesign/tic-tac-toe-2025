import { GameState, type TGameState } from "../types/TGameState";
import { type TSquare, Mark } from "../types/TSquare";
import calculateWinner from "../util/calculateWinner";
import Square from "./Square";

type BoardProps = {
  xIsNext: boolean;
  squares: TSquare[];
  gameState: TGameState;
  handleMove: Function;
};

const Board = ({ xIsNext, squares, gameState, handleMove }: BoardProps) => {
  // todo: this logic can be governed at the square level if
  // useContext contains the game state, nextPlayer, and winning ids
  const winningSquares = calculateWinner(squares) || false;
  const unplayable = gameState !== GameState.PLAY;

  function handleClick(i: number) {
    if (unplayable || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = Mark.X;
    } else {
      nextSquares[i] = Mark.O;
    }
    handleMove(nextSquares);
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
