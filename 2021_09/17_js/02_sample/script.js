const glovalConst = 'test1';
let glovalLet = 'test1';
var glovalVar = 'test1';

const variableScopeTest = () => {
  const localConst = 'test2';
  let localLet = 'test2';
  var localVar = 'test2';

  console.log('variableScopeTest');
  console.log(localConst, localLet, localVar);
  console.log(glovalConst, glovalLet, glovalVar);
};

variableScopeTest();

const variableScopeTest2 = () => {
  const glovalConst = 'local test';
  let glovalLet = 'local test';
  var glovalVar = 'local test';

  console.log('variableScopeTest2');
  console.log(glovalConst, glovalLet, glovalVar);
};

variableScopeTest2();
