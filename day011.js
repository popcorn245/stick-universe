// Create variable to store movement speed
const defaultMovementSpeed = 30;
// Create Tank Object
const tank = {
  el: null,
  x: 0,
  y: 0,
  orientation: 0,
  create: function () {
    // Create the element and save a reference to it
    this.el = document.createElement("span");
    // Setup the styles
    this.el.style.position = "absolute";
    // Use transition to make it animate CSS style changes
    this.el.style.transition = "0.3s linear all";
    // Set the image  with a background so that I don't have to worry about sizing the tank
    this.el.style.background =
      "url('https://forum.cosmoteer.net/assets/files/2020-03-07/1583581655-976459-alien-tank-1.gif') center center / contain no-repeat";
    this.el.style.height = "60px";
    this.el.style.width = "60px";

    // Add the element to the body as a child  <body><span /></body>
    document.body.appendChild(this.el);

    // Return the element so when we create the tank
    // we can save the element for later use
    return this.el;
  },
  move: function (x, y) {
    // Change the positioning
    this.x = this.x + x;
    this.y = this.y + y;
    // Update the HTML element styles
    this.el.style.left = `${this.x}px`;
    this.el.style.top = `${this.y}px`;

    return this.el;
  },
  setOrientation: function (degrees) {
    // Set orientation in degrees
    this.orientation = degrees;
    // Update the HTML element styles
    this.el.style.transform = `rotate(${degrees}deg)`;

    return this.el;
  },
};

// Listen for Key Presses
document.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "ArrowUp") {
    tank.setOrientation(0);
    tank.move(0, -defaultMovementSpeed);
  } else if (event.key === "ArrowDown") {
    tank.setOrientation(180);
    tank.move(0, defaultMovementSpeed);
  } else if (event.key === "ArrowLeft") {
    tank.setOrientation(270);
    tank.move(-defaultMovementSpeed, 0);
  } else if (event.key === "ArrowRight") {
    tank.setOrientation(90);
    tank.move(defaultMovementSpeed, 0);
  } else if (event.key === " ") {
    tank.fire();
  }
});

// Create our tank (SEE FUNCTION ON LINE 9)
const bobby = tank.create();
