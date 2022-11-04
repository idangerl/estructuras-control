//factorial de 10

let factorial = 10;
let i = 9;
while (true) {
  factorial = factorial * i;
  i--;
  if (i < 1) {
    break;
  }
}
console.log(factorial);
