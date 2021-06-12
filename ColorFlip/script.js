const btnColor = document.querySelector(".btn");
const hexDiv = document.querySelector(".hex-div");
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

function invertHex(hex) {
  return (Number(`0x1${hex}`) ^ 0xffffff).toString(16).substr(1).toUpperCase();
}

function replaceBg(hexNumber) {
  bg.style.backgroundColor = "#" + hexNumber;
  let newHexNumber = invertHex(hexNumber);
  console.log(newHexNumber);
  hexDiv.style.color = `#${newHexNumber}`;
  hexDiv.innerHTML = "#" + hexNumber;
}
