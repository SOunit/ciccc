{
  console.log('reversed method -------');
  const reverse = (str) => {
    return str.split('').reverse().join('');
  };

  let result = reverse('hello');
  console.log(result);

  result = reverse('paper');
  console.log(result);
}

{
  console.log('reversed for loop -------');
  const reverse = (str) => {
    let reversed = '';
    for (let char of str) {
      reversed = char + reversed;
    }
    return reversed;
  };

  let result = reverse('hello');
  console.log(result);

  result = reverse('paper');
  console.log(result);
}

{
  console.log('reversed for loop -------');
  const reverse = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  };

  let result = reverse('hello');
  console.log(result);

  result = reverse('paper');
  console.log(result);
}
