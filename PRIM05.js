// FizzBuzz

// Write a function that takes a positive integer `n`, and returns an array that contains, in order, all of the numbers from `1` to `n`. But for multiples of three (evenly divisible by three) print “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.

function fizzBuzz(number) {
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
  }
}

console.log(fizzBuzz(80));
