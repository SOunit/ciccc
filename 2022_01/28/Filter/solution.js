const API_URL = "https://randomuser.me/api?results=50";
const result = document.getElementById("result");
const filter = document.getElementById("filter");

document.querySelector("#filter").addEventListener("keyup", function (event) {
  let liList = document.getElementsByTagName("li");

  Array.from(liList).forEach((li) => {
    // reset
    li.style.display = "block";

    // filter by style
    if (
      li.childNodes[3].textContent
        .toLocaleLowerCase()
        .includes(event.target.value.toLowerCase())
    ) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });
});

async function getData() {
  const response = await fetch(API_URL);
  const { results } = await response.json();

  //clear result
  result.innerHTML = "";

  // assing data to tag
  result.innerHTML = ((results) => {
    return results
      .map((result) => {
        return `
      <li>
          <img src="${result.picture.medium}" />
          <div class="user-info">
          <h4>${result.name.first} ${result.name.last}</h4>
          <p>${result.location.city}, ${result.location.country}</p>
          </div>
      </li>
        `;
      })
      .join("");
  })(results);
}

getData();
