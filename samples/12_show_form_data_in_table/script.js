// FIXME:
// delete consoles in production
// console stays for only reference

// check connection
console.log('hello from js');

// =========================
// task 1
// =========================
const meals = [
  { name: 'Pizza', price: 14, popularity: 'high' },
  { name: 'Hamburger', price: 8, popularity: 'high' },
  { name: 'Egg', price: 2, popularity: 'middle' },
];

// =========================
// task 2
// =========================

const addRowsToTable = (tableRowDataList) => {
  const targetTableBody = document.querySelector('.js-tbody');
  console.log(targetTableBody);

  // reset content
  targetTableBody.innerHTML = '';

  tableRowDataList.map((tableRowData) => {
    // create tr element
    const trElem = document.createElement('tr');

    // create td element
    const tdElemName = document.createElement('td');
    const tdElemPrice = document.createElement('td');
    const tdElemPop = document.createElement('td');

    // add text to td tags
    tdElemName.innerText = tableRowData.name;
    tdElemPrice.innerText = tableRowData.price;
    tdElemPop.innerText = tableRowData.popularity;

    // add tds to tr
    trElem.appendChild(tdElemName);
    trElem.appendChild(tdElemPrice);
    trElem.appendChild(tdElemPop);
    console.log(trElem);

    // add tr to table
    targetTableBody.appendChild(trElem);
  });
};

addRowsToTable(meals);

// =========================
// task 3
// =========================

// check css file

// =========================
// task 4
// =========================

document.querySelector('.table').addEventListener('mouseover', () => {
  console.log('hover');

  // add class to table
  const targetTable = document.querySelector('.table');
  console.log(targetTable);
  targetTable.classList.add('table--hover');
});

document.querySelector('.table').addEventListener('mouseleave', () => {
  console.log('leave');

  // remove class from table
  const targetTable = document.querySelector('.table');
  console.log(targetTable);
  targetTable.classList.remove('table--hover');
});

// =========================
// task 5
// =========================

// set event listener
// <button>Submit</button>
const submitButton = document.getElementById('submit');
console.log(submitButton);

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('clicked!!!!!');

  const userInputData = getValuesFromInput();
  console.log(userInputData);
  meals.push(userInputData);

  // =========================
  // task 6
  // =========================
  alert(
    `name: ${userInputData.name}, price: ${userInputData.price}, popularity: ${userInputData.popularity}`
  );

  addRowsToTable(meals);
});

const getValuesFromInput = () => {
  // get values
  const nameInput = document.getElementById('name');
  const valueFromNameInput = nameInput.value;
  console.log('name,', valueFromNameInput);

  const priceInput = document.getElementById('price');
  const valueFromPriceInput = priceInput.value;
  console.log('price,', valueFromPriceInput);

  const popularityInput = document.getElementById('popularity');
  const valueFromPopularityInput = popularityInput.value;
  console.log('popularity,', valueFromPopularityInput);

  return {
    name: valueFromNameInput,
    price: valueFromPriceInput,
    popularity: valueFromPopularityInput,
  };
};

// console.log(nameInput, price1Input, popularityInput);
