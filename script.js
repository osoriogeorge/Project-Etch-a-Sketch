document.body.classList.add("container");
document.body.querySelector(".container");

const btn = document.createElement("button");
btn.textContent = "Grid Restart";
document.body.appendChild(btn);

function handleClick() {
  createGrid();
}

btn.addEventListener("click", handleClick);

const gridContainer = document.getElementById("grid");

function createGrid() {
  const msg = prompt("¿Cuántos cuadrados por lado deseas?");
  let userResponse = Number(msg);
  console.log(userResponse);

  if (isNaN(userResponse) || userResponse <= 0 || userResponse > 100) {
    alert("Por favor, ingresa un número válido.");
  } else {
    gridContainer.innerHTML = "";
    let squaresNbr = userResponse * userResponse;

    for (let i = 0; i < squaresNbr; i++) {
      let divSquares = document.createElement("div");
      divSquares.style.height = `calc(600px / ${userResponse})`;

      divSquares.addEventListener("mouseover", () => {
        divSquares.style.backgroundColor = "darkGrey";
      });
      console.log("Grid Created");
      gridContainer.appendChild(divSquares);
    }
  }
}
createGrid();
