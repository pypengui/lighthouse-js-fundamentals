function ageCalculator(name, dob, cur) {
  let age = cur - dob;
  return name + " is " + age + " years old.";
}
console.log(ageCalculator("Suzie", 1983, 2015));
