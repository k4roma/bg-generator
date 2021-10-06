let leftColor = document.getElementById('color-left');
let rightColor = document.getElementById('color-right');
let randomButton = document.getElementById('random');
let outputText = document.querySelector('h3');

function setGradient(e) {
  document.body.style.background = `linear-gradient(to right, ${leftColor.value}, ${rightColor.value}`;
  outputText.innerText = document.body.style.background;
}
function setRandomGradient(e) {
  document.body.style.background = `linear-gradient(to right, ${getRandomHex()}, ${getRandomHex()}`;
  outputText.innerText = document.body.style.background;
}

function getRandomHex() {
  let color = Math.floor(Math.random()*16777215).toString(16);
  return `#${color}`;
}

leftColor.addEventListener('input', setGradient);
rightColor.addEventListener('input', setGradient);
randomButton.addEventListener('click', setRandomGradient)

setGradient();
getRandomHex();
