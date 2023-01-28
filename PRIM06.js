// Implement multiples of N

// Write a function that takes a positive integer `n`, and returns an array that contains, all of the numbers from 1 to 50 that are multiples of `n`.

function multiplesOfN(n) {
  // need to set parameters for n to not go past 50
  // multiples of the number is just n times itself
  // push each value into an array
  let arr = [];
  for (let i = n; i < 50; i += n) {
    arr.push(i);
  }
  return arr;
}

console.log(multiplesOfN(2));
