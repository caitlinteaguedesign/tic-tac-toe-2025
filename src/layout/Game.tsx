function Game() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 grid-flow-col gap-3">
      <div className="card row-span-3 min-w-[166px]">
        <h2 className="type-interface">Moves</h2>
        <button
          type="button"
          className="button button--primary button--interactive"
        >
          <span className="text">Button</span>
        </button>
        <button
          type="button"
          className="button button--interactive button--secondary"
        >
          Button
        </button>
        <button
          type="button"
          className="button button--secondary button--disabled"
        >
          Button
        </button>
      </div>
      <div className="card row-start-1">Status</div>
      <div className="card row-start-2">Board</div>
      <div className="card row-start-3">
        <div className="type-interface">Timer</div>
      </div>
      <div className="card row-span-3 min-w-[166px]">
        <h2 className="type-interface">History</h2>
      </div>
    </div>
  );
}

export default Game;
