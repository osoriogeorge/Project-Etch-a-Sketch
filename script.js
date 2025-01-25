function createSquare(size) {
  const square = document.createElement("div");
  square.style.width = `${size}px`;
  square.style.height = `${size}px`;
  square.addEventListener("mouseover", () => {
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
}

function handleClick() {
  const userResponse = parseInt(prompt("¿Cuántos cuadrados por lado deseas?"));
  if (isNaN(userResponse) || userResponse <= 0 || userResponse > 100) {
    alert("Por favor, ingresa un número válido entre 1 y 100.");
  } else {
    createGrid(userResponse);
  }
}

const btn = document.createElement("button");
btn.textContent = "Reiniciar Cuadrícula";
btn.addEventListener("click", handleClick);
document.body.insertBefore(btn, document.getElementById("grid"));

const gridContainer = document.getElementById("grid");

createGrid(16);
