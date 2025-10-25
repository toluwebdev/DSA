class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  get(index) {
    return this.data[index];
  }
  pop() {
    let th = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return th;
  }
  shift() {
    let firstElement = this.data[0];
    //   ReIndexing
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstElement;
  }
  deleteByIndex(index) {
    let item = this.data[index];
    for (let i = index; i < this.length; i++) {
      console.log(this.data[i], this.data[i + 1]);
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

let newArray = new myArray();
newArray.push("Tolu");
newArray.push("Judah");
newArray.push("Silas");

console.log(newArray);
