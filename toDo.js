const btn = document.querySelector(".btn");
const input = document.querySelector(".input-on");
const list = document.querySelector(".list");
let count = document.querySelector(".count");
let countOne = 0;

btn.addEventListener("click", addList);

function addList() {
  let out = input.value;
  list.innerHTML = input.value;
  console.log(out);
  countOne++;
  count.innerHTML = "ВСЕГО :" + countOne;
}
