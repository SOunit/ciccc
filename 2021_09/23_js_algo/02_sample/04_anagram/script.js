{
  function anagram(sideA, sideB) {
    const sideAmap = charMap(sideA);
    const sideBmap = charMap(sideB);
  }

  function charMap(str) {
    const charMapPlaceholder = [];
    let stringArr = str.toLowerCase();

    const reg = /\s/;

    for (let char of stringArr) {
      console.log(char);

      if (reg.test(char)) {
        continue;
      }
      if (charMapPlaceholder[char]) {
        charMapPlaceholder[char]++;
      } else {
        charMapPlaceholder[char] = 1;
      }
    }

    console.log(charMapPlaceholder);
  }

  console.log(anagram('Eleven plus two', 'twelve plus one'));
}

{
  function anagram(str1, str2) {}
  console.log(anagram('Eleven plus two', 'twelve plus one'));
}
