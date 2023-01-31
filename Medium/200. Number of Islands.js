/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;

  for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[r].length; c++) {
          if (grid[r][c] == '1') {
              count++;
              traverse(r, c, grid);
          }
      }
  }
  return count;
};

let traverse = (row, col, grid) => {
  let isRowInbound = row >= 0 && row < grid.length;
  let isColInbound = col >= 0 && col < grid[0].length;

  if (!isRowInbound || !isColInbound) {
      return;
  }

  if (grid[row][col] !== '1') {
      return;
  }

  grid[row][col] = '0';

  traverse(row + 1, col, grid);
  traverse(row - 1, col, grid);
  traverse(row, col + 1, grid);
  traverse(row, col - 1, grid);

};