// ---------- 1. Singly Linked List
// a. Push Challenge ✅
// b. Pop Challenge ✅
// c. Unshift Challenge ✅
// d. Shift Challenge ✅
// e. GetFirst Challenge ✅
// f. GetLast Challenge ✅
//g. Get Challenge ✅
// g. Set Challenge ✅
// h. Insert Challenge 
// i. Size Challenge
// j. Clear Challenge

class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let temp = this.head;
    while (temp) {
      if (!temp.next) {
        return temp;
      }
      temp = temp.next;
    }
  }
  get(count) {
    let index = 0;
    let temp = this.head;
    while (temp) {
      if (count === index) {
        return temp;
      }

      index++;
      temp = temp.next;
    }
    return null;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index)
}
const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.pop();
myLinkedList.pop();
myLinkedList.unshift(0);
myLinkedList.unshift(-1);
myLinkedList.shift();

console.log(myLinkedList.set(1, 10));
console.log(myLinkedList);
// --------- 2. Doubly Linked List
// a. Push Challenge
// b. Pop Challenge
// c. Unshift Challenge
// d. Shift Challenge

//  3. Reversee Linked List
