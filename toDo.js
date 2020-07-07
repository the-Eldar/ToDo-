const btn = document.querySelector(".btn");
const input = document.querySelector(".input-on");
const list = document.querySelector(".list");
let count = document.querySelector(".count");
let countOne = 0;

// Сохранение данных в localStorage
// let listMass = [];
// if (localStorage.getItem("todo")) {
//   listMass = JSON.parse(localStorage.getItem("todo"));
// }

// Добавление события
btn.addEventListener("click", addList);

function addList() {
  showList(input.value);
  // listMass.push(input.value);
  // console.log(listMass);
  // console.log(input.value);
  countOne++;
  count.innerHTML = "ВСЕГО :" + countOne;
  input.value = "";
  // Сохранение данных в localStorage
  // localStorage.setItem("todo", JSON.stringify(listMass));
}

// Создание DOM-дерева
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
