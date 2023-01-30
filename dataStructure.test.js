const { Stack } = require('./CH-01.js');
const { Queue } = require('./CH-02');
const { Reversal } = require('./CH-04');

describe('CH-01', () => {
  test('add item to list', () => {
    const newStack = new Stack();
    newStack.push(1);
    newStack.push(1);
    newStack.push(1);
    expect(newStack.readableList).toEqual('1,1,1');
  });

  test('delete items off the list', () => {
    const newStack = new Stack([1, 2, 3, 4]);
    newStack.pop();
    expect(newStack.readableList).toEqual('1,2,3');
  });

  test('return the last item in the list', () => {
    const newStack = new Stack([1, 2, 3, 4]);
    const peekedItem = newStack.peek();
    expect(peekedItem).toEqual('4');
  });
});

describe('CH-02', () => {
  test('adds item into queue', () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    newQueue.enqueue(4);
    expect(newQueue.readableList).toEqual('1,2,3,4');
  });

  test('takes out oldest item in the list', () => {
    const newQueue = new Queue([1, 2, 3, 4]);
    newQueue.dequeue();
    expect(newQueue.readableList).toEqual('2,3,4');
  });

  test('checks if theres another item left in queue', () => {
    const newQueue = new Queue([1, 2]);
    expect(newQueue.hasNext()).toEqual(true);
  });
});

describe('CH-04', () => {
  test('reverses an array', () => {
    const Array = new Reversal([1, 2, 3, 4]);
    const newArr = Array.reverse();
    expect(newArr).toEqual([4, 3, 2, 1]);
  });
});
