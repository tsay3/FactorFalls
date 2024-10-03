// The game file controls the internal model that the game is built on.

const totalPositionsWide = 10;
const totalPositionsHigh = 10;

var cartridgePosition = 4;
var cartridgeDirection = 0;

function moveCartridgeLeft() {
    if (cartridgePosition > 0) {
        cartridgeDirection = -1;
        cartridgePosition--;
        startCartridgeAnimation();
    }
}

function moveCartridgeRight() {
    if (cartridgePosition < (totalPositionsWide - 3)) {
        cartridgeDirection = 1;
        cartridgePosition++;
        startCartridgeAnimation();
    }
}

let time = document.timeline.currentTime;

function update() {
    if ((document.timeline.currentTime - time) / 30 > 1) {
        updateCartridgeAnimation();

        drawWaterfall();
        drawCartridge(cartridgePosition, cartridgeDirection);
        time = document.timeline.currentTime;
    }
    requestAnimationFrame(update);
}

requestAnimationFrame(update);