var Queue = (() => {
  const qKey = {};
  const items = new WeakMap();

  class Queue {
    constructor() {
      items.set(qKey, []);
    }

    add(newEl) {
      let queue = items.get(qKey);
      let newElPosition = queue.length;

      if (!queue.length) {
        queue.push(newEl);
        return;
      }

      for (let [i, v] of queue.entries()) {
        if (newEl.priority > v.priority) {
          newElPosition = i;
          break;
        }
      }

      queue.splice(newElPosition, 0, newEl);
    }

    remove() {
      let queue = items.get(qKey);
      return queue.shift();
    }

    peek() {
      let queue = items.get(qKey);
      return queue[queue.length - 1];
    }

    front() {
      let queue = items.get(qKey);
      return queue[0];
    }

    clear() {
      items.set(qKey, []);
    }

    size() {
      return items.get(qKey).length;
    }
  }

  return Queue;
})();

var priorityQueue = new PriorityQueue();

priorityQueue.add({ el: 1, priority: 1 });

// state of Queue
// [1]
//  ^

priorityQueue.add({ el: 2, priority: 2 });

// state of Queue
// [2, 1]
//  ^

priorityQueue.add({ el: 3, priority: 3 });

// state of Queue
// [3, 2, 1]
//  ^

priorityQueue.add({ el: 4, priority: 3 });

// state of Queue
// [3, 4, 2, 1]
//     ^

priorityQueue.add({ el: 5, priority: 2 });

// state of Queue
// [3, 4, 2, 5, 1]
//           ^
