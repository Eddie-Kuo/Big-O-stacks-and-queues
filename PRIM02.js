// Oddish vs Evenish
// Write a function that determines whether a number is Oddish or Evenish.
// A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even.
// If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

function oddishOrEvenish(number) {
  // if else statement to check whether the sum is even or odd and render the word accordingly to that result
  // input can come in as a number or string?
  // need to separate each value to then add them

  const toString = number.toString();
  const arrOfStings = toString.split('');
  const arrOfNumbers = arrOfStings.map((str) => Number(str));

  const value = arrOfNumbers.reduce((acc, num) => acc + num, 0);
  if (value % 2 === 0) {
    return 'Evenish';
  } else {
    return 'Oddish';
  }
}
console.log(oddishOrEvenish(123));
console.log(oddishOrEvenish(199));
