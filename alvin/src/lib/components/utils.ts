export const millisecondsToTimestamp = (ms: number): string => {
  const currentTimeAsDate = new Date(ms);
  const minutes = currentTimeAsDate.getMinutes();
  const seconds = currentTimeAsDate.getSeconds();
  if (seconds < 10) {
    return `${minutes}:0${seconds}`;
  }
  return `${minutes}:${seconds}`;
};
