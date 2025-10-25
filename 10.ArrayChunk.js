const chunk = (array, size) => {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    console.log(chunk);
    chunked.push(chunk);
    index += size;
  }
  return chunked;
};

chunk([1, 23, 4], 2);
