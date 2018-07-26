var numSquares = 6;
var colors = [];
var pickedColor;
var correctMessages = ["Correct!", "Pefect Match!", "Good Eye!", "Spot On"];
var againMessages = ["Try Again"];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newGameButton = document.getElementById("new-game");
var mode = document.querySelectorAll(".mode");
var wholeBody = document.querySelector("body");

initialize();

function initialize() {
	setupModeButtons();
	setupSquares();
	reset();
};

function setupModeButtons() {
	for (var i = mode.length - 1; i >= 0; i--) {
		mode[i].addEventListener("click", function() {
			for (var i = mode.length - 1; i >= 0; i--) {
				mode[i].classList.remove("selected");
			}
			this.classList.add("selected");
			switch (this.textContent) {
				case "Easy":
					numSquares = 3;
					break;
				case "Normal": 
					numSquares = 6;
					break;
				case "Hard": 
					numSquares = 9;
			}
			reset();
		});
	}
	mode[1].classList.add("selected");
};

function setupSquares() {
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = correctMessages[Math.floor(Math.random() * correctMessages.length)];
				changeColors(pickedColor);
				h1.style.backgroundColor = pickedColor;
				newGameButton.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = againMessages[Math.floor(Math.random() * againMessages.length)];
			}
		});
	}
};


function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	};
	messageDisplay.textContent = "";
	newGameButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
};

function changeColors(x) {
	for (var i = colors.length - 1; i >= 0; i--) {
		squares[i].style.backgroundColor = x;
	};
	
};

function pickColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(numSquares) {
	let arr = [];
	for (var i = numSquares - 1; i >= 0; i--) {
		arr.push(randomColor());
	};
	return arr;
};

function randomColor() {
	let r = Math.floor(Math.random() * 256),
		g = Math.floor(Math.random() * 256),
		b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
};


wholeBody.addEventListener("keydown", function() {
	reset();
});

newGameButton.addEventListener("click", function() {
	reset();
});