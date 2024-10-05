// The game file controls the internal model that the game is built on.

const totalPositionsWide = 10;
const totalPositionsHigh = 10;

let cartridgePosition = 4;
let cartridgeDirection = 0;

let offScreenTiles = [];
let riverTiles = [];
let waterfallTiles = [];
let cartridgeTiles = [[], [], []];

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

/**
 * Initialize tiles
 */

for (let i = 0; i < 10; i++) {
    offScreenTiles.push(new Digit(0));
}

let updateTime = document.timeline.currentTime;
let digitAddTime = document.timeline.currentTime;
let digitNum = 0;

function update() {
    if ((document.timeline.currentTime - updateTime) / 30 > 1) {
        waterfallTiles.forEach((digit) => {
            digit.animationY += TILE_FALL_SPEED / 1000 * (document.timeline.currentTime - updateTime);
            while (digit.animationY > TILE_HEIGHT) {
                digit.gameY++;
                digit.animationY -= TILE_HEIGHT;
            }
            
        });
        let newWaterfallTiles = [];
        for (let i = 0; i < waterfallTiles.length; i++) {
            let digit = waterfallTiles[i];
            if (digit.gameY <= totalPositionsHigh + 1) {
                newWaterfallTiles.push(digit);
            } else {
                offScreenTiles.push(digit);
            }
        }
        waterfallTiles = newWaterfallTiles;
        updateCartridgeAnimation();

        drawWaterfall();
        drawDigits(waterfallTiles);
        drawCartridge(cartridgePosition, cartridgeDirection);
        updateTime = document.timeline.currentTime;
    }
    
    if ((document.timeline.currentTime - digitAddTime) / 1000 > 1) {
        if (offScreenTiles.length > 0) {
            let digit = offScreenTiles.pop();
            digit.gameX = Math.floor(Math.random() * totalPositionsWide);
            digit.gameY = 0;
            digit.value = digitNum;
            digitNum++;
            if (digitNum >= 10) digitNum = 0;
            waterfallTiles.push(digit);
            digitAddTime = document.timeline.currentTime;
        }
    }
    requestAnimationFrame(update);
}

requestAnimationFrame(update);