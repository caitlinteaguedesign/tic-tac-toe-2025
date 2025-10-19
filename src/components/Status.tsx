type StatusProps = {
  status: string;
};

const Status = ({ status }: StatusProps) => {
  return (
    <div className="card status-layout text-center text-white">{status}</div>
  );
};

export default Status;
