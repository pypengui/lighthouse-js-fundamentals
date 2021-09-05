function smartGarbage(trash, bins){
  let bin = {
    waste: 0,
    recycling:0,
    compost:0
  }
    if(trash === "waste"){
      waste++;
      return waste;
    } else if(trash === "recycling"){
      recycling++;
      return recycling;
    } else if( trash === "compost"){
    compost++;
    return compost;
  }
}
smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
console.log(smartGarbage.bins);
