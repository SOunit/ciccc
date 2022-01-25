/* JavaScript DOM Exercises 01 */
/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text
  (with a yellow background for example)
*/
(() => {
  const target = document.querySelector("p");
  const words = target.textContent
    .split(" ")
    .map((word) =>
      word.length > 8
        ? `<span style="background-color: yellow;">${word}</span>`
        : word
    )
    .join(" ");
  target.innerHTML = words;
})();

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
(() => {
  const link = document.createElement("div");
  link.innerHTML = `<a href="http://officeipsum.com/">go back</a>`;
  const body = document.querySelector("body");
  body.appendChild(link);
})();

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
(() => {
  const body = document.querySelector("body");
  const sentenceList = document.querySelector("p");
  const h1 = document.querySelector("h1");

  body.append(h1);
  body.append(
    sentenceList.innerHTML
      .split(".")
      .map((sentence) => `<p>${sentence}.</p>`)
      .join("")
  );
})();

/*
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
(() => {
  const pTags = document.querySelectorAll("p");
  let count = 0;
  pTags.forEach((ptag) => {
    count += ptag.textContent.split(" ").length;
  });
  console.log(count);

  const p = document.querySelector("p");
})();

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (:考え中:) and exclamation marks (!) with astonished faces (:ヒー:)
*/
Array.from(document.querySelectorAll("p")).forEach((p) => {
  p.innerHTML = p.innerHTML.replace(/\?/g, "🤔").replace(/\!/g, "😲");
});
