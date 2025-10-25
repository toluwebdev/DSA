function Palindrome(str) {
  let reverseStr = "";

  for (let i = 0; i < str.length; i++) {
    reverseStr = str[i] + reverseStr;
  }
  if (str === reverseStr) {
    return "it is a palindrome ";
  } else {
    return "IT is not a palindrome";
  }
}
console.log(Palindrome("cddc"));
console.log(Palindrome("cdd1"));
// or
function Palindrome2(str) {
  let th = str.split("").reverse().join("");
  console.log(th);
  if (th === str) {
    return "it is a palindrome ";
  } else {
    return "IT is not a palindrome";
  }
}
console.log(Palindrome2("cddc"));
console.log(Palindrome2("cdd1"));
