/*
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).
[
  [0, 1]
  [2, 3]
]
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
	let col = matrix.length;
	let row = matrix[0].length;

	for (var i = 0; i < row; i++) {
		for (var j = i; j < col; j++) {
			swap(matrix, j, i, i, j);
		}
  }

  
  console.log(matrix);

	for (var i = 0; i < row; i++) {
		for (var j = 0; j < col / 2; j++) {
      swap(matrix, i, j, i, col - 1 - j)
		}
	}
};

function swap(array, a1, a2, b1, b2) {
	let tmp = array[a1][a2];
	array[a1][a2] = array[b1][b2];
	array[b1][b2] = tmp;
}

let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

rotate(matrix);

console.log(matrix);
