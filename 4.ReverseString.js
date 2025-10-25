function ReverseString(str) {
  let reverseStr = "";

  for (let i = 0; i < str.length; i++) {
    reverseStr = str[i] + reverseStr;
  }

  console.log(reverseStr);
}
ReverseString("Bolu is a boy");
//or

function ReverseString2(str) {
  let th = str.split("").reverse().join("");
  console.log(th);
}

ReverseString2("Bolu is a boy");
