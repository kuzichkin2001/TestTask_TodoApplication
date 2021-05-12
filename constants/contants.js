export const formatDate = str => {
  const date = str.getDate();
  const month = str.getMonth() + 1;
  const year = str.getFullYear();
  return `${date < 10 ? `0${date}` : date}.${month < 10 ? `0${month}` : month}.${year}`;
};