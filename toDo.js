const btn = document.querySelector(".btn");
const input = document.querySelector(".input-on");
const list = document.querySelector(".list");
let count = document.querySelector(".count");
let countOne = 0;

btn.addEventListener("click", addList);

function addList() {
  showList(input.value);
  console.log(input.value);
  countOne++;
  count.innerHTML = "ВСЕГО :" + countOne;
  input.value = "";
}

function showList(value) {
  const li = document.createElement("li");
  li.className = "li";
  li.textContent = value;

  const closeBtn = document.createElement("closeBtn");
  closeBtn.className = "closeBtn";
  closeBtn.textContent = "x";
  li.appendChild(closeBtn);

  closeBtn.addEventListener("click", (e) => {
    list.removeChild(li);
    countOne--;
    count.innerHTML = "ВСЕГО :" + countOne;
  });

  list.appendChild(li);
}
