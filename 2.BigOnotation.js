// O(n)
let groceries = ["eggs", "Bread", "Strawberry", "Milk", "Bananas"];

let foundItem = (arr, items) => {
  arr.forEach((element, index) => {
    if (element === items) {
      console.log("Found item", items, index);
    }
  });
};

// 0(1)
let foundItem2 = (arr, index) => {
  console.log(arr[index]);
};
foundItem(groceries, "Strawberry");
foundItem2(groceries, 1);

// 0(n^2)

let arr = [1, 2, 3, 4, 5, 6];
function findPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
  for (let q = 0; q < arr.length; q++) {
    console.log("---------", q);
  }
}

findPairs(arr);
