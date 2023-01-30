//Add First Element

//Write a function `addFirst` that takes a parameter `element` and returns a function that takes an array and returns a _new_ array with `element` as the first element plus all the elements of the passed array.

function addFirst(element) {
  const newElement = JSON.stringify(element);
  //   console.log('newElement', newElement);
  return function newArr(arr) {
    // console.log('arr', arr);
    // const updatedArr = arr.push(newElement);
    const updatedArr = [element, ...arr];
    // console.log('updatedArr', updatedArr);
    return updatedArr;
  };
}

// const addItem = addFirst('Orange');
// console.log(addItem(['testing', 'if', 'this', 'works', 'or', 'not']));
const addItem = addFirst('Orange');
console.log(addItem(['1', '2', '3', '4', '5', '6']));
