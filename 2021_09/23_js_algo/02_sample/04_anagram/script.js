{
  function anagram(sideA, sideB) {
    const sideAmap = charMap(sideA);
    const sideBmap = charMap(sideB);

    // console.log(Object.entries(sideAmap));

    if (Object.keys(sideAmap).length !== Object.keys(sideBmap).length) {
      return false;
    }

    for (let char in sideAmap) {
      // sideAmap['h'] -> 1 !== sideBmap['h'] -> 1
      if (sideAmap[char] !== sideBmap[char]) {
        return false;
      }
    }
    return true;
  }

  function charMap(str) {
    const charMapPlaceholder = [];
    // g for global, all, not only first one
    let stringArr = str.replace(/[\W]/g, '').toLowerCase();

    for (let char of stringArr) {
      if (charMapPlaceholder[char]) {
        charMapPlaceholder[char]++;
      } else {
        charMapPlaceholder[char] = 1;
      }
    }

    console.log(charMapPlaceholder);
    return charMapPlaceholder;
  }

  console.log(anagram('Eleven plus two', 'twelve plus one'));
  console.log(anagram('hello', 'olleh'));
  console.log(anagram('hello', 'ollleh'));
  console.log('is this?');
  console.log(anagram('Tom Marvolo Riddle', 'I am Lord Voldemort'));
}

{
  // function anagram(str1, str2) {}
  // console.log(anagram('Eleven plus two', 'twelve plus one'));
}
