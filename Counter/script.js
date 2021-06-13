const counterText = document.querySelector(".counter-text");
const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");

let valueCounter = 0;
counterText.innerHTML = valueCounter;

minusButton.addEventListener("click", subtractFromCounter);
plusButton.addEventListener("click", addToCounter);

function subtractFromCounter() {
  if (valueCounter <= 0) {
    return;
  }
  valueCounter--;
  counterText.innerHTML = valueCounter;
}

function addToCounter() {
  valueCounter++;
  counterText.innerHTML = valueCounter;
}
