const formatTime = (milliseconds: number, includeMs: boolean = false) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const ms = Math.floor((milliseconds % 1000) / 10); // Displaying in 10ms increments

  let time = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;

  if (includeMs) time = `${time}.${String(ms).padStart(2, "0")}`;

  return time;
};

export default formatTime;
