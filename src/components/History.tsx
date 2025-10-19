import type { TSquare } from "../types/TSquare";
import Button from "./Button";

type HistoryProps = {
  currentMove: number;
  history: TSquare[][];
  goToMove: Function;
};

const History = ({ currentMove, history, goToMove }: HistoryProps) => {
  return (
    <div className="card history-layout">
      <h2 className="type-interface mb-4">History</h2>
      {history.length > 1 ? (
        <ol className="flex flex-col gap-2 max-w-60 pb-1">
          {history.slice(1).map((_move, i) => (
            <li key={`move-li_${i}`}>
              {i === currentMove - 1 ? (
                <Button
                  label={`Viewing Move ${currentMove}`}
                  style="secondary"
                  full
                  disabled
                />
              ) : (
                <Button
                  label={`Go to Move ${i + 1}`}
                  onButtonClick={() => goToMove(i + 1)}
                  style="secondary"
                  arrow="right"
                  full
                />
              )}
            </li>
          ))}
        </ol>
      ) : (
        <p className="pb-1">No moves yet.</p>
      )}
    </div>
  );
};

export default History;
