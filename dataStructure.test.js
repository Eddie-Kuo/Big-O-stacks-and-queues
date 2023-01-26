const { Stack } = require('./CH-01.js');

describe('CH-01', () => {
  it('add item to list', () => {
    const newStack = new Stack();
    newStack.push(1);
    newStack.push(1);
    newStack.push(1);
    expect(newStack.readableList).toEqual('1,1,1');
  });

  it('delete items off the list', () => {
    const newStack = new Stack([1, 2, 3, 4]);
    newStack.pop();
    expect(newStack.readableList).toEqual('1,2,3');
  });

  it('return the last item in the list', () => {
    const newStack = new Stack([1, 2, 3, 4]);
    const peekedItem = newStack.peek();
    expect(peekedItem).toEqual('4');
  });
});
