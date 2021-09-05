const moves = ["north", "north", "west", "west", "north", "east", "north"];
const finalPosition = function (moves) {
  let position = [0, 0];
  for (let moveIndex in moves) {
    const move = moves[moveIndex];
    if (move === "north") {
      position[1]++;
    } else if (move === "south") {
      position[1]--;
    } else if (move === "east") {
      position[0]++;
    } else if (move === "west") {
      position[0]--;
    }
  }
  return position;
};
console.log(finalPosition(moves));
