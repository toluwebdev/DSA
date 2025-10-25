//  ⚠️ this is not the better solution the better solution is in 
let twoSum = (arr, targert) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targert) {
        return [[i], [j]];
      }
    }
    return [];
  }
};
console.log(twoSum([1, 2, 3, 4, 5], 3));
console.log(twoSum([2, 7, 11, 15], 9));
