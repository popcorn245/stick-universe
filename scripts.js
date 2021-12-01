// document.addEventListener("input", (event) => {
//   console.log(event);
//   if (event.target.id === "color" && event.target.value) {
//     document.body.style.setProperty("--stick-color", event.target.value);
//   } else if (event.target.id === "weight" && event.target.value) {
//     document.body.style.setProperty("--stick-width", `${event.target.value}px`);
//   }
// });

// document.addEventListener("keydown", (event) => {
//   if (event.code === "Space") {
//     const stickman = document.querySelector("#stickman");
//     console.dir(stickman);
//     if (stickman.classList.contains("jump-animation")) {
//       stickman.classList.remove("jump-animation");
//     }
//     setTimeout(() => {
//       stickman.classList.add("jump-animation");
//     }, 200);
//   }
// });

// NEW CODE FROM DAY 006

//GLOBAL
const test = "something";
let temp = 1;

function addTodo(todoText = "test") {
  // ISOLATED SCOPE
  console.log(document);
  const todoEl = document.querySelector("#todo");
  const value = todoEl.value;
  const todoListEl = document.querySelector("#todo-list");
  const newItemEl = document.createElement("li");
  newItemEl.textContent = todoText;
  todoListEl.appendChild(newItemEl);
  test = "wee";
  // SIDE EFFECT (IMMUTABLE)
  console.log(test);
}

console.log(test);

function sendMessage(message) {
  alert(message);
}

sendMessage("Hello Me");
sendMessage("Say whatever");
sendMessage("Hello Me");
