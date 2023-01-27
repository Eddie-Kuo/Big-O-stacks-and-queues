// Anagrams

// Write a function that takes two words as arguments and returns true if they are anagrams (contain the exact same letters) and false otherwise.

function anagrams(wordOne, wordTwo) {
  // sort method to alphabetize each word
  // from there we can compare each letter of array 1 to array 2?
  // return true or false based on the comparisons

  const arrOne = wordOne.split('');
  const newArrOne = arrOne.sort();
  const stringOne = newArrOne.join('');

  const arrTwo = wordTwo.split('');
  const newArrTwo = arrTwo.sort();
  const stringTwo = newArrTwo.join('');

  if (stringOne === stringTwo) {
    return 'true';
  } else {
    return 'false';
  }
}

console.log(anagrams('cat', 'askdjasdgbna'));
console.log(anagrams('elephant', 'thanpele'));
