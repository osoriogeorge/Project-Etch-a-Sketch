document.body.classList.add("container");

const btn = document.createElement("button");
btn.textContent = "Click Me";
document.body.appendChild(btn);

function handleClick() {
  const msg = window.prompt("Cuantos cuadrados por lados desea");
  let userChoice = Number(msg);

  if (isNaN(userChoice) || userChoice <= 0 || userChoice >= 100) {
    return (msg = window.prompt("Cuantos cuadrados por lados desea"));
  } else {
    for (let i = 0; i < 256; i++) {
      let div = document.createElement("div");
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "darkRed";
      });

      container.appendChild(div);
      console.log("new grid");
    }
  }
}
btn.addEventListener("click", handleClick);

const container = document.getElementById("grid");

for (let i = 0; i < 256; i++) {
  let div = document.createElement("div");
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "darkGrey";
  });

  container.appendChild(div);
  console.log("Grid Generated");
}
