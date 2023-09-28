function MinHeap() {
  const heap = [];

  function heapifyUp() {
    let currentIndex = heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (heap[currentIndex] < heap[parentIndex]) {
        // Swap the current element with its parent
        [heap[currentIndex], heap[parentIndex]] = [
          heap[parentIndex],
          heap[currentIndex],
        ];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  function heapifyDown() {
    let currentIndex = 0;
    const { length } = heap;

    while (true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let smallestChildIndex = currentIndex;

      if (
        leftChildIndex < length
        && heap[leftChildIndex] < heap[smallestChildIndex]
      ) {
        smallestChildIndex = leftChildIndex;
      }

      if (
        rightChildIndex < length
        && heap[rightChildIndex] < heap[smallestChildIndex]
      ) {
        smallestChildIndex = rightChildIndex;
      }

      if (currentIndex === smallestChildIndex) {
        break;
      }

      // Swap the current element with the smallest child
      [heap[currentIndex], heap[smallestChildIndex]] = [
        heap[smallestChildIndex],
        heap[currentIndex],
      ];

      currentIndex = smallestChildIndex;
    }
  }

  function insert(value) {
    heap.push(value);
    heapifyUp();
  }
  function isEmpty() {
    return heap.length === 0;
  }

  function remove() {
    if (isEmpty()) {
      return null;
    }

    if (heap.length === 1) {
      return heap.pop();
    }

    const root = heap[0];
    heap[0] = heap.pop();
    heapifyDown();

    return root;
  }

  return { insert, remove, isEmpty };
}

// Example usage:
const minHeap = MinHeap();
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(7);
minHeap.insert(1);
minHeap.insert(9);

console.log(minHeap.heap); // Output: [1, 3, 7, 5, 9]

console.log(minHeap.remove()); // Output: 1
console.log(minHeap.heap); // Output: [3, 5, 7, 9]
