// accessing button and span tags by their id and tag
const button = document.querySelector("#btn");
const spans = document.querySelector("span");

// create a event listener
button.addEventListener("click", function () {
  const color = (document.body.style.backgroundColor = randomColor());
  spans.innerText = color;
});

// function to create random color in rgb format
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
