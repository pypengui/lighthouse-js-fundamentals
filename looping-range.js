function range(start, end, step) {
  let b = [];
  if (step <= 0) {
    return [];
  } else {
    for (let i = start; i <= end; i += step) {
      b.push(i);
    }
    return b;
  }
}
console.log(range(10, 30, 5));

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
