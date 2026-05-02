function changeColor() {
  let colors = ["red", "blue", "green", "yellow", "pink", "orange"];

  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  document.getElementById("body").style.backgroundColor = randomColor;
}