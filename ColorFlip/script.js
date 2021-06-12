const btnColor = document.querySelector(".btn");
const bg = document.getElementById("background");

btnColor.addEventListener("click", randomHex);

function randomHex() {
  let arrayRand = [];
  for (let i = 0; i < 6; i++) {
    let numberRand = Math.floor(Math.random(9) * 9);
    arrayRand.push(numberRand);
  }
  replaceBg(arrayRand.join(""));
}

function replaceBg(hexNumber) {
  bg.style.backgroundColor = "#" + hexNumber;
}
