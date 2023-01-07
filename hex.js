// creating array for generation of hex colors
const randomColors = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "F",
  "E",
  "D",
  "C",
  "B",
  "A",
];

// accessing button and span tags by their id and tag
const button = document.querySelector("#btn");
const spans = document.querySelector("span");

// create a event listener and function which create hex code
button.addEventListener("click", function () {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += randomColors[getRandomColorIndex()];
  }
  const color = (document.body.style.backgroundColor = hex);
  spans.innerText = color;
});

// create a function to generate random color indexes by using color array
function getRandomColorIndex() {
  return Math.floor(Math.random() * randomColors.length);
}
