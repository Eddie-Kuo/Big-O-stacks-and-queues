class Reversal {
  #list = [];
  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }

  reverse() {
    const newArr = this.#list.reverse();
    return newArr;
  }
}

const reversal = new Reversal([12, 3, 5, 7]);
console.log(reversal.reverse()); // returns [7,5,3,12]

module.exports = { Reversal };
