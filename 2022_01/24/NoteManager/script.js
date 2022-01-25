/**
 *
 * Select and Manipulate on individual elements - getElementById
 */

// const list = document.getElementById("list");
// // list.textContent = "Hello";
// list.innerHTML = "<h1>Hello</h1>";

// console.log(list.textContent);
// console.log(list.innerHTML);

/**
 *
 * Select and Manipulate on individual elements - querySelector
 */

const el = document.querySelector("ul li:nth-child(2)");
console.dir(el);

console.log(el.querySelector("p .fa-times"));

/**
 *
 * Select and Manipulate on individual elements - looping over getElementByClassName
 */

const icons = document.getElementsByClassName("fa");
console.log(icons);

for (let i = 0; i < icons.length; i++) {
  console.log(icons[i]);
}

// icons.push("Hello");
const iconsArr = Array.from(icons);
console.log(iconsArr);
iconsArr.push("Hello");
console.log(Array.isArray(iconsArr));
console.log(Array.isArray(icons));

/**
 * Select and Manipulate on multiple elements  - querySelectorAll
 */

// const list2 = document.querySelectorAll("li, h2, #hide-list");
// console.log(list2);

// // list2.push("Hello");
// Array.from(list2).forEach((li) => {
//   //   li.textContent = "Hello World";
//   li.innerHTML =
//     '<img width="100" src="https://images.unsplash.com/photo-1585604882137-b4eeef3bd0dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80" />';
// });
// console.log(list2);

/**
 * DOM Styles and classes v1
 */

// const h2 = document.querySelector("header h2");

// h2.style.color = "blue";
// h2.style.backgroundColor = "green";

// const list3 = document.querySelectorAll("ul li");
// for (let i = 0; i < list3.length; i++) {
//   list3[i].style.backgroundColor = "magenta";
// }

// list3[0].style.cssText = "background-color: yellow; font-size: 3rem";

/**
 * DOM Styles and classes v2
 */

const h2 = document.querySelector("header h2");

// h2.className = "changeBackground";
// h2.className = "changeFontStyle";
// h2.className += "changeFontStyle";
// h2.className += " changeFontStyle";
// console.log(typeof h2.className);

h2.classList.add("changeBackground");
h2.classList.add("changeFontStyle");
h2.classList.remove("changeBackground");

/**
 * Get and Set attributes
 */

const divWrapper = document.querySelector("div.wrapper");

console.log(divWrapper.getAttribute("class"));
console.log(divWrapper.getAttribute("id"));
divWrapper.setAttribute("style", "background-color: coral");
divWrapper.removeAttribute("style");
console.log(divWrapper.hasAttribute("style"));

const btn = document.getElementById("add-btn");
const input = document.getElementById("add-input");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  //   console.log(event);
  console.log(input.value);
});

/**
 * DOM Navigation
 */

const listItem = document.getElementById("list");

// console.log(listItem.parentNode);
// console.log(listItem.parentNode.parentNode);
// console.log(listItem.parentNode.parentNode.parentNode.parentNode.parentNode);

console.log((listItem.parentElement.style.background = "orange"));
console.log(listItem.childNodes);
console.log(listItem.children);
console.log(listItem.firstChild);
console.log(listItem.lastChild.previousSibling);
