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
document.querySelector("#stick-house").addEventListener("click", (event) => {
  const stickHouseEl = document.querySelector("#stick-house");
  console.log(stickHouseEl);
  stickHouseEl.style["--window-color"] = "yellow";
  stickHouseEl.style["--show-lights"] = "block";
});
</3;
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

// PRIMITIVES TYPES
function daySeven() {
  const boolean = true;
  const integer = 0;
  const nothing = null;
  const string = "";

  let secret = "testing";
  let groceries = ["milk", "eggs", "cheese", "butter"];

  // 0 Indexed
  for (const shoppingItem of groceries) {
    console.log(shoppingItem);
  }

  // Ken
  for (let o = 1; o <= 9; o++) {
    console.log(o);
  }

  secret = "wee";
  var ken = "tits";
  // CJ
  const me = "Cj";

  // Stick

  var bobby = "bitch";

  alert(`This is the secret word: ${secret}!`);
}

daySeven();

// EOT END OF LINE TERMINATION

// CJ
function goat() {
  var nice = "cj";
  const boolean = false;
  console.log(nice);
}
goat();

// Stick

function daysixtynine() {
  var hi = "Stickman";
  console.log(hi);
}
daysixtynine();

// Ken
function derp() {
  var ken = "ke";
  console.log(ken);
}
derp();
