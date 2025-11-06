type StatusProps = {
  message: string;
  endGame: boolean;
};

const Status = ({ message, endGame }: StatusProps) => {
  return (
    <div className={`card status-layout status-card ${endGame && "winner"}`}>
      <p className={`text ${endGame && "winner"}`}>{message}</p>
    </div>
  );
};

export default Status;
