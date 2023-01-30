// Title Case Words
// Write a function that takes a sentence string and returns a new string that is the same sentence, but with the first letter of each word capitalized, and the rest lowercase

// ## Test Cases

// Input | Output
// ---|---
// `'alchemy ROCKS goLD'` | `'Alchemy Rocks Gold'`

function titleCase(sentence) {
  // sentence is a string of stings so need to separate them to individual values
  // map through and for every ' ', cut there and make to a new array with 1 element inside?
  // capitalize the index [0] then push into new array
  // need to account for other letters too

  const words = sentence.split(' ');
  let newArr = [];
  for (const word of words) {
    const lowerCase = word.toLowerCase();
    const newVar = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    newArr.push(newVar);
  }
  const newSentence = newArr.join(' ');
  console.log(newSentence);
}

// titleCase('this is my first sentence');
titleCase('this will BE my SeCond Test');
