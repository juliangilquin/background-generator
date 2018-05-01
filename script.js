var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButt = document.querySelector(".randoms");

function setGradient () {
	body.style.backgroundImage = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = "background-image: " + body.style.backgroundImage + ";";
}

function randomRGB () {
	var a = Math.floor((Math.random() * 255));
	var b = Math.floor((Math.random() * 255));
	var c = Math.floor((Math.random() * 255));
	return "rgb(" + a + ", " + b + ", " + c + ")";
}

function randomColorsRGB () {
	var randomC1 = randomRGB();
	var randomC2 = randomRGB();
	body.style.backgroundImage = 
	"linear-gradient(to right, " + randomC1 + ", " + randomC2 + ")";
	css.textContent = "background-image: " + body.style.backgroundImage + ";";
}

function randomHex () {
  var hex = "";
  var possible = "ABCDEF0123456789";

  for (var i = 0; i < 6; i++) {
    hex += possible.charAt(Math.floor(Math.random() * possible.length));
  };

  return "#" + hex;
}

function randomColorsHex () {
	color1.value = randomHex();
	color2.value = randomHex();
	setGradient();
}

setGradient();

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)

randomButt.addEventListener("click", randomColorsHex)