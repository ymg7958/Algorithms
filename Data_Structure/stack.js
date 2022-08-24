var Stack = (() => {
  const sKey = {};
  const items = new WeakMap();

  class Stack {
    constructor() {
      items.set(sKey, []);
    }
    push(element) {
      let stack = items.get(sKey);
      stack.push(element);
    }
    pop() {
      let stack = items.get(sKey);
      return stack.pop();
    }
    peek() {
      let stack = items.get(sKey);
      return stack[stack.length - 1];
    }
    clear() {
      items.set(sKey, []);
    }
    size() {
      return items.get(sKey).length;
    }
  }
  return Stack;
})();

var stack = new Stack();
stack.push(10);
stack.push(20);

console.log(stack.items); // prints undefined -> cannot be accessed directly
console.log(stack.size()); // prints 2
console.log(stack.peek()); // prints 20
console.log(stack.pop()); // prints 20
console.log(stack.size()); // prints 1
stack.clear();
console.log(stack.size()); // prints 0
