(() => {
  const add = () => {
    const text = document.querySelector("#add-input").value;
    console.log("click", text);

    const li = document.createElement("li");
    li.innerHTML = `
        <p>${text}</p>
        <p>
          <i class="fa fa-pencil"></i>
          <i class="fa fa-times"></i>
        </p>
      `;
    document.querySelector("#list").append(li);
  };

  document.querySelector("#add-btn").addEventListener("click", (event) => {
    event.preventDefault();

    add();
  });
})();
