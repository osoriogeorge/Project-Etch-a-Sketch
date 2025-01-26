let isMouseDown = false;

function createSquare(size) {
  const square = document.createElement("div");
  square.style.width = `${size}px`;
  square.style.height = `${size}px`;

  square.addEventListener("mouseover", () => {
    if (isMouseDown) {
      square.style.backgroundColor = "black";
    }
  });

  square.addEventListener("mousedown", () => {
    square.style.backgroundColor = "black";
  });

  return square;
}

function createGrid(size) {
  gridContainer.innerHTML = "";

  const squareSize = Math.floor(600 / size);

  for (let i = 0; i < size * size; i++) {
    const square = createSquare(squareSize);
    gridContainer.appendChild(square);
  }

  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let paraInfoSize = document.getElementById("grid-size-info");

  if (!paraInfoSize) {
    paraInfoSize = document.createElement("p");
    paraInfoSize.id = "grid-size-info";
    document.body.appendChild(paraInfoSize);
  }
  paraInfoSize.textContent = `Grid size is: ${size}x${size}`;
}

function handleClick() {
  const userResponse = parseInt(
    prompt("How many squares per side would you like? (Maximum: 100)")
  );
  if (isNaN(userResponse) || userResponse <= 0 || userResponse > 100) {
    alert("Please enter a valid number between 1 and 100.");
  } else {
    createGrid(userResponse);
  }
}

const btn = document.createElement("button");
btn.textContent = "Grid Size";
btn.addEventListener("click", handleClick);
document.body.insertBefore(btn, document.getElementById("grid"));

const gridContainer = document.getElementById("grid");

gridContainer.addEventListener("mousedown", () => {
  isMouseDown = true;
});

gridContainer.addEventListener("mouseup", () => {
  isMouseDown = false;
});

gridContainer.addEventListener("mouseleave", () => {
  isMouseDown = false;
});

createGrid(16);
