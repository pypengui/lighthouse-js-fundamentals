
let x = "Lighthouse";
let y = "Loopy";

for ( let i = 100;i < 201; i++) {
  if (i % 12 === 0) {
    console.log(y + x);
  } else if (i % 4 === 0) {
    console.log(x);
  } else if (i % 3 === 0) {
    console.log(y);
  }else {
    console.log(i);
  }
}

/*
let x = "Lighthouse";
let y = "Loopy";
let i = "100"
while ( i < 201) {
  if (i % 12 === 0) {
    console.log(y + x);
  } else if (i % 4 === 0) {
    console.log(x);
  } else if (i % 3 === 0) {
    console.log(y); 
  } else{
    console.log(i); 
  }
  i++
}
*/
