(() => {
  const nameList = [
    { index: 1, name: 'a' },
    { index: 2, name: 'b' },
    { index: 3, name: 'c' },
    { index: 4, name: 'd' },
    { index: 5, name: 'f' },
    { index: 6, name: 'g' },
    { index: 7, name: 'h' },
    { index: 8, name: 'i' },
    { index: 9, name: 'j' },
    { index: 10, name: 'k' },
    { index: 11, name: 'l' },
    { index: 12, name: 'm' },
    { index: 13, name: 'n' },
    { index: 14, name: 'o' },
    { index: 15, name: 'p' },
    { index: 16, name: 'q' },
    { index: 17, name: 'r' },
    { index: 18, name: 's' },
    { index: 19, name: 't' },
    { index: 20, name: 'u' },
    { index: 21, name: 'v' },
    { index: 22, name: 'w' },
    { index: 23, name: 'x' },
    { index: 24, name: 'y' },
    { index: 25, name: 'x' },
    { index: 26, name: 'a-a' },
    { index: 27, name: 'a-b' },
    { index: 28, name: 'a-c' },
  ];

  const getClassTableList = (arr, availableSeatCount) => {
    let maximum = 0;
    let cnt = 0;
    let index = 0;
    let classTable = [];
    let classTableList = [];

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
      if (maximum > 0 && classTable[0].index === 1) {
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
      studentNameDiv.innerHTML = `name: ${student.name}`;

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

  const availableSeatCount = 12;
  const classTableList = getClassTableList(nameList, availableSeatCount);

  dispTableList(classTableList);
})();
