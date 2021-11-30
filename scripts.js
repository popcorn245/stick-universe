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

function addTodo() {
  const todoEl = document.querySelector("#todo");
  const value = todoEl.value;
  const todoListEl = document.querySelector("#todo-list");
  const newItemEl = document.createElement("li");
  newItemEl.textContent = value;
  todoListEl.appendChild(newItemEl);
}
