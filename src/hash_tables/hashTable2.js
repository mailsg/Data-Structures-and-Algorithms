/*eslint-disable*/
class HashTable {
  constructor(size = 100) {
    this.size = size;
    this.table = new Array(size);
  }

  // Hash function to convert a key into an index
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  // Insert a key-value pair into the hash table
  insert(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push({key, value});
  }

  // Get the value associated with a key
  get(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return undefined; // Key not found
    }
    for (const entry of this.table[index]) {
      if (entry.key === key) {
        return entry.value;
      }
    }
    return undefined; // Key not found
  }

  // Remove a key-value pair from the hash table
  remove(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return; // Key not found
    }
    const updatedEntries = this.table[index].filter(entry => entry.key !== key);
    if (updatedEntries.length === 0) {
      delete this.table[index];
    } else {
      this.table[index] = updatedEntries;
    }
  }

  // Display all key-value pairs in the hash table
  display() {
    const items = [];
    for (const bucket of this.table) {
      if (bucket) {
        for (const entry of bucket) {
          items.push(`${entry.key}: ${entry.value}`);
        }
      }
    }
    console.log(items.join(', '));
  }
}

// Example usage:
const myHashTable = new HashTable();

myHashTable.insert('name', 'John');
myHashTable.insert('age', 30);
myHashTable.insert('city', 'New York');
myHashTable.insert('mane', 'Clark');

myHashTable.display(); // Output: name: John, age: 30, city: New York
