module.exports = function solveSudoku(matrix) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (matrix[row][col] === 0) {
        for (let suspect = 1; suspect < 10; suspect++) {
          if (appropriate_number(row, col, suspect, matrix)) {
            if (solveSudoku(matrix)) {
              return matrix;
            }
            matrix[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;   
}
function appropriate_number( row, col, suspect, matrix,) {
  for(let i = 0; i<9; i++){
      if (matrix[row][i]===suspect){return false}
      if (matrix[i][col]===suspect){return false}  
      if(matrix[Math.floor(row/3)*3+Math.floor(i/3)][Math.floor(col/3)*3+i%3]===suspect){return false} 
    }
   return matrix[row][col] = suspect;
}










