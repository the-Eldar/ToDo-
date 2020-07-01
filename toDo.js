const btn = document.querySelector(".btn");
const input = document.querySelector(".input-on");
const list = document.querySelector(".list");
let count = document.querySelector(".count");
let countOne = 0;
let listMass = [];

btn.addEventListener("click", addList);

function addList() {
  let todoList = {
    todo: input.value,
    checked: false,
  };

  listMass.push(todoList);

  list.innerHTML += `<li>${input.value}</li>`;
  input.value = "";
  console.log(listMass);
  countOne++;
  count.innerHTML = "ВСЕГО :" + countOne;
}
