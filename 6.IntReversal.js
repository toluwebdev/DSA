function IntReversal(int) {
  let thisi = int.toString();
  let reverseStr = "";
  for (let i = 0; i < thisi.length; i++) {
    reverseStr = thisi[i] + reverseStr;
  }
  return parseInt(reverseStr) * Math.sign(int);
}
console.log(IntReversal(-1234));
