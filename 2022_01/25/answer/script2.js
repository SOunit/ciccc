/**
 * Creating Elements
 */

const newEl = document.createElement('button') // <button></button>
// console.dir(newEl);
const text = document.createTextNode('Click')
// console.dir(text);
newEl.appendChild(text)

newEl.setAttribute('style', 'display: block; background-color:royalblue')

const form = document.getElementById('add')

// form.appendChild(newEl)
console.dir(form)
form.insertBefore(newEl, form.children[5])