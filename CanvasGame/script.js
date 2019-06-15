// Create the canvas
var canvas = document.createElement("canvas");
var text = canvas.getContext('2d');
var timer = 0;
var caught = false;
var fps = 10;
document.body.appendChild(canvas);
canvas.width = 800;
canvas.height = 480;

var bgReady = false;
var bgImage = new Image();

bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "images/bg.png";

var pokReady = false;
var pokImage = new Image();
pokImage.onload = function () {
    pokReady = true;
};
pokImage.src = "images/pokemon2.png";

var pokemon = {
  speed: 256,
	x: 0,
	y: 0
};
var pokCaught = 0;

var reset = function () {
    pokemon.x = 40 + (Math.random() * (canvas.width - 130));
    do {
        pokemon.y = 40 + (Math.random() * (canvas.height - 130));
    }
    while (pokemon.y < 100)
};

//mousedown event
window.addEventListener("mousedown", onMouseDown, false);
function onMouseDown(e) {

    if (e.button != 0) return;

    mouseXinCanvas = e.clientX;
    mouseYinCanvas = e.clientY;

    if (pokBody(pokemon, mouseXinCanvas, mouseYinCanvas)) {
        caught = true;
        clearInterval(timer);
        timer = setInterval(reset, 20000 / fps);
        reset();
    }
    if (ResetScore(mouseXinCanvas, mouseYinCanvas)) {
        location.reload();
    }
    if (ResetSpeed(mouseXinCanvas, mouseYinCanvas)) {
        clearInterval(timer);
        timer = setInterval(reset, 20000 / fps);
        reset();
        render();
    }
};

function pokBody(pokemon, x, y) {

    if (x <= (pokemon.x + 80)
        && pokemon.x <= (x + 80)
        && y <= (pokemon.y + 80)
        && pokemon.y <= (y + 80)
    ) {
        fps = fps + 5;
        pokCaught++;
        return true;
    }
    return false;
};

function ResetScore(x, y) {
    if (x > 305 && x < 545 && y > 15 && y < 85) {
        return true;
    }
    return false;
};

function ResetSpeed(x, y) {
    if (x > 605 && x < 845 && y > 15 && y < 85) {
        fps = 10;
        return true;
    }
    return false;
};

var render = function () {
    text.clearRect(0,0,text.canvas.width,text.canvas.height);
    if (bgReady) {
        text.drawImage(bgImage, 0, 100);
    }
    if (pokReady) {
        text.drawImage(pokImage, pokemon.x, pokemon.y);
    }
    if (caught == true) {
        if (bgReady) {
            text.drawImage(bgImage, 0, 100);
        }
        caught = false;
    }

    // Score, Title
    text.fillStyle = "rgb(109, 170, 255)";
    text.font = "28px Trebuchet";
    text.textAlign = "left";
    text.textBaseline = "top";
    text.fillText("Catch Pokemon!!!", 5, 40);
    text.font = "20px Helvetica";
    text.fillText("Score: " + pokCaught, 10, 10);

    // Reset Score, Speed button
    text.fillStyle = "rgb(109, 170, 255)";
    text.fillRect(250, 10, 250, 80);
    text.fillRect(520, 10, 250, 80);
    text.fillStyle = "rgb(109, 170, 255)";
    text.fillRect(255, 15, 240, 70);
    text.fillRect(525, 15, 240, 70);
    text.fillStyle = "rgb(255, 255, 255)";
    text.font = "34px Trebuchet";
    text.fillText("Reset Score", 295, 30);
    text.fillText("Reset Speed", 560, 30);

};

var main = function () {
    render();
    requestAnimationFrame(main);
};

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
reset();
main();
