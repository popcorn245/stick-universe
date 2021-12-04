const whateverYoudLike = {
  name: "Bobby Johnson",
};

whateverYoudLike.name = "Assface";

console.log(whateverYoudLike.name);
const tankEl = document.querySelector(".tank");

const bobbysTank = {
  color: "red",
  x: 0,
  y: 0,
  move: function (x, y) {
    // if (this.x > window.outerWidth || this.y > window.outerHeight) return;
    this.x = this.x + x;
    this.y = this.y + y;
    tankEl.style.top = `${this.y}px`;
    tankEl.style.left = `${this.x}px`;

    return {
      x: this.x,
      y: this.y,
    };
  },
};

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    bobbysTank.move(15, 0);
  } else if (event.key === "ArrowLeft") {
    bobbysTank.move(-15, 0);
  } else if (event.key === "ArrowUp") {
    bobbysTank.move(0, -15);
  } else if (event.key === "ArrowDown") {
    bobbysTank.move(0, 15);
  }
});

// CJ
const Chicken = {
  name: "cj Karkut",
};
console.log(Chicken.name);
// STICK

const kungflu = {
  name: "Stick Man",
};
console.log(kungflu);

kungflu.name = "Dee Snutz";

// KEN
const chineeseChicken = {
  name: "Kenneth Short",
};
console.log(chineeseChicken);

chineeseChicken.name = "combo";

// const kensTank = {
//   color: "blue",
//     x: 0,
//   y: 0,
//   move: function (x, y) {
//     this.x = this.x + x;
//     this.y = this.y + y;
// };
// // EM

// const newFigure = {
//   name: "utopian",
// };
// console.log(newFigure);

// name = "bestUtopian";

// const gameWorld = {
//   pretties: {
//     trees: {
//       red,
//       green,
//       yellow,
//       red
//     },
//     plants: {}
//   },

// };
