/**
 * returns every sequence of throws a single player could throw over an n-round game of rock-paper-scissors
 * rockPaperScissors(1); -> [['rock'],['paper'],['scissors']]
 * rockPaperScissors(2); -> 
 * [['rock','rock'],['rock','paper'],['rock','scissors'],
 * ['paper','paper'],['paper','scissors'],['paper','rock'],
 * ['scissors','scissors'],['scissors','paper'],['scissors','rock']]
*/

// function rockPaperScissors(num) {
//   const newArray = [];
//   if (num === 1) return [['rock'], ['paper'], ['scissors']];
//   rockPaperScissors(num - 1).forEach(element => {
//     newArray.push(element.concat('rock'));
//     newArray.push(element.concat('paper'));
//     newArray.push(element.concat('scissors'));
//   });
//   return newArray;
// }

function rockPaperScissors(num) {
  // const newArray = [];
  if (num === 1) return [['rock'], ['paper'], ['scissors']];
  return (rockPaperScissors(num - 1).map(element => element.concat('rock'))
  .concat(rockPaperScissors(num - 1).map(element => element.concat('paper')))
  .concat(rockPaperScissors(num - 1).map(element => element.concat('scissors'))));
}

console.log(rockPaperScissors(3));