console.log('hello');

// object = { key: value }
const sample_obj = {
  name: 'Jack',
  age: () => {
    return 33;
  },
  gender: {
    father: 'male',
    mother: 'female',
  },
  innerText: '',
};

console.log('sample_obj.name', sample_obj.name);
console.log('sample_obj.age', sample_obj.age);
console.log('sample_obj.age', sample_obj.age());
console.log('sample_obj.gender', sample_obj.gender);
console.log('sample_obj.gender.father', sample_obj.gender.father);

// evenrything = object
console.log(console);

sample_obj.innerText = '';
