// @ts-check

//  To practice your wide range of JavaScript skills, try to solve tasks 1 and 2 with prototype syntax and the remaining tasks with class syntax.

/**
 * A class representing the size of an object.
 */
class Size {
  /**
   * Creates a new Size object with the specified width and height.
   * @param {number} [width=80] - The width of the object.
   * @param {number} [height=60] - The height of the object.
   */
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }

  /**
   * Resizes the object to the specified width and height.
   * @param {number} newWidth - The new width of the object.
   * @param {number} newHeight - The new height of the object.
   */
  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

/**
 * A class representing the position of an object.
 */
class Position {
  /**
   * Creates a new Position object with the specified x and y coordinates.
   * @param {number} [x=0] - The x-coordinate of the object.
   * @param {number} [y=0] - The y-coordinate of the object.
   */
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  /**
   * Moves the object to the specified x and y coordinates.
   * @param {number} newX - The new x-coordinate of the object.
   * @param {number} newY - The new y-coordinate of the object.
   */
  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

/**
 * A class representing the window of an application.
 * Its name is used instead of Window to differentiate the class from the built-in Window class that exists in browser environments.
 */
class ProgramWindow {
  /**
   * Creates an instance of ProgramWindow with default screen size, size, and position.
   */
  constructor() {
    this._screenSize = new Size(800, 600);
    this._size = new Size(80, 60);
    this._position = new Position();
  }

  /**
   * Gets the screen size of the program window.
   * @returns {Size} The screen size of the program window.
   */
  get screenSize() {
    return this._screenSize;
  }

  /**
   * Sets the screen size of the program window.
   * @param {Size} value - The new screen size value (ignored).
   */
  set screenSize(value) {
    throw new Error(
      `screenSize cannot be manipulated, ${value} is ignored.`
    );
  }

  /**
   * Gets the size of the program window.
   * @returns {Size} The size of the program window.
   */
  get size() {
    return this._size;
  }

  /**
   * Gets the position of the program window.
   * @returns {Position} The position of the program window.
   */
  get position() {
    return this._position;
  }

  /**
   * Resizes the program window to the specified width and height.
   * @param {Size} newSize - The new size of the program window.
   */
  resize(newSize) {
    this._size.width = Math.max(newSize.width, 1);
    this._size.height = Math.max(newSize.height, 1);
  }

  move(newPosition) {
    this._position.x = Math.max(newPosition.x, 0);
    this._position.y = Math.max(newPosition.y, 0);
  }
}

/**
 * 
 * @param {*} window 
 */
const changeWindow = (window) => {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);
  window.resize(newSize);
  window.move(newPosition);
};










const programWindow = new ProgramWindow();
const newSize = new Size(100, 100);
programWindow.resize(newSize);
const newPosition = new Position(750, 650);
programWindow.move(newPosition);
console.log(programWindow.position.x, 700);
console.log(programWindow.position.y, 500);


// const programWindow = new ProgramWindow();
// const newPosition = new Position(710, 525);
// programWindow.move(newPosition);
// const newSize = new Size(1000, 1000);
// programWindow.resize(newSize);
// console.log(programWindow.size.width, 90);
// console.log(programWindow.size.height, 75);




// const programWindow = new ProgramWindow();
// const updatedWindow = changeWindow(programWindow);
// console.log(updatedWindow.size.width, 400);
// console.log(updatedWindow.size.height, 300);






export {
  Size,
  Position,
  ProgramWindow,
  changeWindow,
};
