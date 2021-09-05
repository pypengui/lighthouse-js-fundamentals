/*
const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"]
];

function chooseStations(stations) {
  const goodStations = [];
  for (const station of stations) {
    const capacity = station[1];
    if (capacity >= 20) {
      const type = station[2];
      if (type === "school" || type === "community centre") {
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations;
}
console.log(chooseStations(stations));

*/
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  
const finalPosition = function (moves) {
  let position = [0,0]
  for (let move in moves){
    let x = move[0];
    let y = move[1];
    if(move === "north"){
      x++;
      position.push(x);
    } else if(move === "south"){
      x--;
      position.push(x);
    } else if(move === "east"){
      y++;
      position.push(y);
    } else if(move === "west"){
      y--;
      position.push(y);
    }
  }
  return position;
}
console.log(finalPosition(moves))