// Repeat String

//Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter `txt` is the string to be repeated and the second parameter `n` is the number of times the string is to be repeated.

function repeat(word, n) {
  const arr = new Array(n).fill(word);
  const newArr = arr.join('');
  return newArr;
}
console.log(repeat('hi', 5));
console.log(repeat('boop', 10));
