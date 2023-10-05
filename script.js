window.addEventListener("load", setDefaultGrid);

function setDefaultGrid() {
setGridSize(16,16);
}

function setGridSize(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (rows * cols); i++) {
      let cell = document.createElement("div");
      cell.classList.add("gridItem");
      cell.innerText = ("");
      cell.addEventListener("mouseover", changeColor);
      grid.appendChild(cell).className = "gridItem";
    };
  };

function changeColor() {
  var self = this
  self.setAttribute("style", "background-color: red;");
}
const resetB = document.getElementById("resetButton");
resetB.addEventListener("click", testGrid);

var grid = document.getElementById("grid");

function testGrid() {
  while (grid.hasChildNodes())
  grid.removeChild(grid.firstChild)
  square = Number(prompt("Number of Rows & Columns", ''))
    if (square > 50) square = 50;                                 // Set Upper limit of Grid 50x50
  setGridSize(square,square);
}
