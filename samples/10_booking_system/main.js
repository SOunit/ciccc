(() => {
  const getNameListFromJson = () => {
    // copy and paste from json
    // data format
    // { index: 1, name: 'Jack' }
    return [{ index: 1, name: 'Jack' }];
  };

  const arrayShuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const getClassTableList = (arr, availableSeatCount) => {
    let maximum = 0;
    let cnt = 0;
    let index = 0;
    let classTable = [];
    let classTableList = [];
    let startIndex = 0;

    while (maximum < 500) {
      console.log('maximum: ', maximum + 1);

      while (cnt < availableSeatCount) {
        if (index >= arr.length) {
          index = 0;
        }
        classTable.push(arr[index]);
        index++;
        cnt++;
      }

      classTableList.push(classTable);
      if (maximum === 0) {
        startIndex = classTable[0].index;
      }
      if (maximum > 0 && classTable[0].index === startIndex) {
        break;
      }

      // countup
      maximum++;

      // reset
      cnt = 0;
      classTable = [];
    }

    return classTableList;
  };

  const getNewCycle = (classTable, index) => {
    // create cycle div as a parent div
    const cycleDiv = document.createElement('div');
    cycleDiv.classList.add('cycle');

    // add cycle__title
    const cycleTitle = document.createElement('h2');
    cycleTitle.classList.add('cycle__title');
    cycleTitle.innerHTML = `Cycle ${index + 1}`;
    cycleDiv.append(cycleTitle);

    // create students ul
    const studentsUl = document.createElement('ul');
    studentsUl.classList.add('students');

    classTable.map((student) => {
      // create student li
      const studentLi = document.createElement('li');
      studentLi.classList.add('student');

      // create student__index
      const studentIndexDiv = document.createElement('div');
      studentIndexDiv.classList.add('student__index');
      studentIndexDiv.innerHTML = `index: ${student.index}`;

      // create student__name
      const studentNameDiv = document.createElement('div');
      studentNameDiv.classList.add('student__name');
      studentNameDiv.innerHTML = `${student.name}`;

      // add students ul
      studentLi.append(studentIndexDiv);
      studentLi.append(studentNameDiv);
      studentsUl.append(studentLi);
    });

    cycleDiv.append(studentsUl);

    return cycleDiv;
  };

  const dispTableList = (classTableList) => {
    const cyclesSection = document.querySelector('.cycles');
    console.log(cyclesSection);

    classTableList.map((classTable, index) => {
      const newCycle = getNewCycle(classTable, index);
      cyclesSection.append(newCycle);
    });
  };

  // {index: 1, name: 'test'}
  let nameList = getNameListFromJson();

  const needShuffle = false;
  if (needShuffle) {
    nameList = arrayShuffle(nameList);
  }

  const availableSeatCount = 12;
  const classTableList = getClassTableList(nameList, availableSeatCount);

  dispTableList(classTableList);
})();
