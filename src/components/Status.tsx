type StatusProps = {
  message: string;
  endGame: boolean;
};

const Status = ({ message, endGame }: StatusProps) => {
  return (
    <div
      className={`card status-layout ${
        endGame && "tall"
      } text-center text-white`}
    >
      <p>{message}</p>
    </div>
  );
};

export default Status;
