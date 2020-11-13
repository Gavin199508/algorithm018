/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let res = 0;
  let rows = grid.length;
  let lines = grid[0].length;
  if (rows == 0) return 0;
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < lines; j++) {
          if (grid[i][j] == "1") {
              helper(i, j, rows, lines, grid);
              res++
          }
      }
  }
  return res;
}
var helper = function (i, j, rows, lines, grid) {
  if (i < 0 || j < 0 || i > rows - 1 || j > lines - 1 || grid[i][j] == 0) {
      return;
  }
  grid[i][j] = '0'
  helper(i - 1, j, rows, lines, grid);
  helper(i, j - 1, rows, lines, grid);
  helper(i + 1, j, rows, lines, grid);
  helper(i, j + 1, rows, lines, grid);
}