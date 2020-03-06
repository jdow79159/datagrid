
export const getLeftInRow = idx =>
  widthRow.slice(0, idx).reduce((prev, curr) => prev + curr, 0);
export const widthRow = [200, 200, 200, 200, 150, 100, 100];
