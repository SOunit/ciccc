{
  const latestMessage =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptate illum provident alias eius quam quod dolor nobis tenetur aperiam, voluptates nesciunt debitis at molestiae ex cum? Aspernatur, porro est?';

  const splitMessage = latestMessage.split(' ');
  console.log('split -------');
  console.log(splitMessage);
  console.log(splitMessage.length);

  // change original
  const splicedMessage = splitMessage.splice(10);
  console.log('spliced -------');
  console.log('original');
  console.log(splitMessage);
  console.log(splitMessage.length);
  console.log('returned');
  console.log(splicedMessage);
  console.log(splicedMessage.length);

  const joinedMessage = splicedMessage.join(' ');
  console.log('joined -------');
  console.log(joinedMessage);
}

{
}
