function dfsNQueens(n) {
  if (n < 1) {
    return [];
  }

  const solution = [];

  function isSafe(placement, row, col) {
    for (let r = 0; r < row; r++) {
      const c = placement[r];
      if (c === col) return false;
      if (Math.abs(r - row) === Math.abs(c - col)) return false;
    }
    return true;
  }

  function place(row, placement) {
    if (row === n) {
      solution.push(placement);
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(placement, row, col)) {
        place(row + 1, [...placement, col]);
      }
    }
  }

  place(0, []);
  return solution;
}
