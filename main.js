const input = document.querySelector("#input");
const myDiv = document.querySelector("#myDiv");

const btns = document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const style = e.target.classList;
    var ul = myDiv.querySelector("ul");
    var li = document.createElement("li");
    li.textContent = input.value;

    if (style.contains("submit") && !input.value=='') {
      ul.appendChild(li);
      input.value = "";
    } else if (style.contains("delete")) {
      ul.remove(li)
    }
  });
});

window.onload()