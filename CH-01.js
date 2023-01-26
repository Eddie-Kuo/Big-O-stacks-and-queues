// Stacks - First in last out data structures

class Stack {
  #list = [];
  // # makes it a private class so no one can just come in and see what the class functions are
  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }
  push(item) {
    this.#list.push(item);
  }
  pop() {
    const pop = this.#list.pop();
    return pop;
  }
  peek() {
    const item = this.#list.slice(-1);
    // negative index counts from the back of the array starting with the last item
    return item.toString();
  }
  get readableList() {
    return this.#list.toString();
  }
}

// Test Cases

const stack = new Stack();
stack.push('fox');
stack.push('goose');
stack.push('lizard');
console.log(stack.pop()); // 'lizard'
console.log(stack.peek()); // 'goose'
console.log(stack.pop()); // 'goose'
stack.push('llama');
console.log(stack.pop()); // 'llama'
console.log(stack.peek()); // 'fox'
console.log(stack.pop()); // 'fox'
console.log(stack.pop()); // null

module.exports = { Stack };
