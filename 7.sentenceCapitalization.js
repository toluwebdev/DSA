function SentenceCapitalization(words) {
  let lowerCase = words.toLowerCase();

  return lowerCase
    .split(" ")
    .map((e) => e[0].toUpperCase() + e.slice(1))
    .join(" ");
}

console.log(SentenceCapitalization("tolu is a boy"));
