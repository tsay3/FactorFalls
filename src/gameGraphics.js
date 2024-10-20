// The graphics file handles the drawing of the game model onto the canvas of the webpage.

/**
 * Waterfall display & animation
 */

function drawWaterfallBackdrop() {
    drawSky();
    drawWater();
    drawRiverbanks();
}

function drawSky() {
    // ctx = WATERFALL_CANVAS.getContext("2d");
    ctx = CANVAS.getContext("2d");
    ctx.fillStyle = "#D6FBFF";
    ctx.fillRect(0, 0,
        SIDE_MARGIN_WIDTH * 2 + TOTAL_POSITIONS_WIDE * TOTAL_TILE_WIDTH,
        TOP_MARGIN_HEIGHT + TILE_HEIGHT * (TOTAL_POSITIONS_HIGH - 1) + BOTTOM_MARGIN_HEIGHT);
}

function drawWater() {
    // ctx = WATERFALL_CANVAS.getContext("2d");
    ctx = CANVAS.getContext("2d");
    ctx.fillStyle = "#3A86FF";
    ctx.fillRect(0, TOP_MARGIN_HEIGHT + TILE_HEIGHT,
        SIDE_MARGIN_WIDTH * 2 + TOTAL_POSITIONS_WIDE * TOTAL_TILE_WIDTH,
        TILE_HEIGHT * (TOTAL_POSITIONS_HIGH - 1) + BOTTOM_MARGIN_HEIGHT);
}

function drawRiverbanks() {
    // ctx = WATERFALL_CANVAS.getContext("2d");
    ctx = CANVAS.getContext("2d");
    ctx.fillStyle = "#69BF4A";
    ctx.fillRect(0, TOP_MARGIN_HEIGHT - 20 + TILE_HEIGHT,
        SIDE_MARGIN_WIDTH - 5,
        20 + (TILE_HEIGHT - 1) * TOTAL_POSITIONS_HIGH + BOTTOM_MARGIN_HEIGHT);
    ctx.fillRect(SIDE_MARGIN_WIDTH + 5 + TOTAL_POSITIONS_WIDE * TOTAL_TILE_WIDTH,
        TOP_MARGIN_HEIGHT - 20 + TILE_HEIGHT,
        SIDE_MARGIN_WIDTH - 5,
        20 + (TILE_HEIGHT - 1) * TOTAL_POSITIONS_HIGH + BOTTOM_MARGIN_HEIGHT);
}

/**
 * 
 * Digits display and animation
 */

function drawDigit(digit) {
    // ctx = WATERFALL_CANVAS.getContext("2d");
    ctx = CANVAS.getContext("2d");
    ctx.fillStyle = digit.borderColor;
    ctx.fillRect(digit.x, digit.y, digit.width, digit.height);
    ctx.fillStyle = digit.innerColor;
    ctx.fillRect(digit.x + digit.borderWidth, digit.y + digit.borderWidth, digit.width - 2 * digit.borderWidth, digit.height - 2 * digit.borderWidth);
    ctx.fillStyle = digit.numberColor;
    ctx.textBaseline = "middle";
    ctx.font = digit.fontSize;
    ctx.fillText(digit.value, digit.x + digit.borderWidth + 1, digit.y + digit.height / 2);
}

function drawDigits(digitList) {
    digitList.forEach((digit) => {
        drawDigit(digit);
    });
}

function drawCartridgeDigits(offset, digitList) {
    updateFallingTileAnimation();
    digitList.forEach((digit) => {
        digit.offsetX = offset;
        digit.offsetY = cartridgeTileFallAnimation[cartridgeTileIndex];
        drawDigit(digit);
    });
}

/**
 * 
 * Cartridge display & animation
 * 
 */

let cartridgeAnimIndex = 0;
const cartridgeAnimationX = [0, 1, 3, 7, 13, TOTAL_TILE_WIDTH-6];
let cartridgeTileIndex = 0;
const cartridgeTileFallAnimation = [0, 5, -1 * TILE_HEIGHT + 4, -1 * TILE_HEIGHT - 1];
let cartridgeDirection = 0;

function startCartridgeAnimation(){
    cartridgeAnimIndex = cartridgeAnimationX.length;
}

function updateCartridgeAnimation() {
    if (cartridgeAnimIndex > 0) {
        cartridgeAnimIndex--;
    }
}

function startCartridgeTileFallAnimation() {
    cartridgeTileIndex = cartridgeTileFallAnimation.length;
}

function updateFallingTileAnimation() {
    if (cartridgeTileIndex > 0) {
        cartridgeTileIndex--;
    }
}

function updatePushedTiles() {
    pushedTiles.forEach((tile) => {
        tile.offsetX = -1 * cartridgeDirection * cartridgeAnimationX[cartridgeAnimIndex];
    });
}

function drawCartridge(position, tileArray) {
    updateCartridgeAnimation();
    tileArray.forEach((column) => {
        drawCartridgeDigits(-1 * cartridgeDirection * cartridgeAnimationX[cartridgeAnimIndex], column);
    });
    if ((tileArray.length > 0)) {
        updatePushedTiles();
    }
    drawCartridgeContainer(position);
}

function drawCartridgeContainer(position) {
    // ctx = WATERFALL_CANVAS.getContext("2d");
    ctx = CANVAS.getContext("2d");
    // left = -1, so offset is added... right = 1, so offset is subtracted
    const baseX = SIDE_MARGIN_WIDTH + (position * TOTAL_TILE_WIDTH) - cartridgeDirection * cartridgeAnimationX[cartridgeAnimIndex];
    const baseY = TOP_MARGIN_HEIGHT + (TOTAL_POSITIONS_HIGH - 1) * TILE_HEIGHT;
    ctx.beginPath();
    ctx.moveTo(baseX, baseY + TILE_HEIGHT / 2);
    ctx.lineTo(baseX, baseY + TILE_HEIGHT);
    ctx.lineTo(baseX + TILE_WIDTH, baseY + TILE_HEIGHT);
    ctx.lineTo(baseX + TILE_WIDTH + TILE_MARGIN_WIDTH / 2, baseY + TILE_HEIGHT * 4 / 5);
    ctx.lineTo(baseX + TILE_WIDTH + TILE_MARGIN_WIDTH, baseY + TILE_HEIGHT);
    ctx.lineTo(baseX + 2 * TILE_WIDTH + TILE_MARGIN_WIDTH, baseY + TILE_HEIGHT);
    ctx.lineTo(baseX + 2 * TILE_WIDTH + TILE_MARGIN_WIDTH * 1.5, baseY + TILE_HEIGHT * 4 / 5);
    ctx.lineTo(baseX + 2 * TILE_WIDTH + TILE_MARGIN_WIDTH * 2, baseY + TILE_HEIGHT);
    ctx.lineTo(baseX + 3 * TILE_WIDTH + TILE_MARGIN_WIDTH * 2, baseY + TILE_HEIGHT);
    ctx.lineTo(baseX + 3 * TILE_WIDTH + TILE_MARGIN_WIDTH * 2, baseY + TILE_HEIGHT / 2);
    ctx.bezierCurveTo(baseX + 3 * TILE_WIDTH + TILE_MARGIN_WIDTH * 2, baseY + TILE_HEIGHT / 2,
                        baseX + 3 * TILE_WIDTH + TILE_MARGIN_WIDTH * 3, baseY + TILE_HEIGHT * 4 / 5,
                        baseX + 3 * TILE_WIDTH + TILE_MARGIN_WIDTH * 3, baseY + TILE_HEIGHT);
    ctx.bezierCurveTo(baseX + 3 * TILE_WIDTH + TILE_MARGIN_WIDTH * 3, baseY + TILE_HEIGHT + 10,
                        baseX + 3 * TILE_WIDTH + TILE_MARGIN_WIDTH * 2, baseY + TILE_HEIGHT + 10,
                        baseX + 2.5 * TILE_WIDTH + TILE_MARGIN_WIDTH * 2, baseY + TILE_HEIGHT + 10);
    // 2nd knuckle
    ctx.bezierCurveTo(baseX + 2.25 * TILE_WIDTH + TILE_MARGIN_WIDTH * 2, baseY + TILE_HEIGHT + 10,
                        baseX + 2.25 * TILE_WIDTH + TILE_MARGIN_WIDTH * 2, baseY + TILE_HEIGHT + 5,
                        baseX + 2 * TILE_WIDTH + TILE_MARGIN_WIDTH * 1.5, baseY + TILE_HEIGHT + 5);
    ctx.bezierCurveTo(baseX + 1.75 * TILE_WIDTH + TILE_MARGIN_WIDTH, baseY + TILE_HEIGHT + 5,
                        baseX + 1.75 * TILE_WIDTH + TILE_MARGIN_WIDTH, baseY + TILE_HEIGHT + 10,
                        baseX + 1.5 * TILE_WIDTH + TILE_MARGIN_WIDTH, baseY + TILE_HEIGHT + 10);
    // 1st knuckle
    ctx.bezierCurveTo(baseX + 1.25 * TILE_WIDTH + TILE_MARGIN_WIDTH, baseY + TILE_HEIGHT + 10,
                        baseX + 1.25 * TILE_WIDTH + TILE_MARGIN_WIDTH, baseY + TILE_HEIGHT + 5,
                        baseX + TILE_WIDTH + TILE_MARGIN_WIDTH * .5, baseY + TILE_HEIGHT + 5);
    ctx.bezierCurveTo(baseX + .75 * TILE_WIDTH, baseY + TILE_HEIGHT + 5,
                        baseX + .75 * TILE_WIDTH, baseY + TILE_HEIGHT + 10,
                        baseX + .5 * TILE_WIDTH, baseY + TILE_HEIGHT + 10);
    ctx.bezierCurveTo(baseX, baseY + TILE_HEIGHT + 5,
                        baseX - TILE_MARGIN_WIDTH, baseY + TILE_HEIGHT + 10,
                        baseX - TILE_MARGIN_WIDTH, baseY + TILE_HEIGHT);
    ctx.bezierCurveTo(baseX - TILE_MARGIN_WIDTH, baseY + TILE_HEIGHT * 4 / 5,
                        baseX, baseY + TILE_HEIGHT / 2,
                        baseX, baseY + TILE_HEIGHT / 2);
    ctx.closePath();
    ctx.fillStyle = "#B28440";
    ctx.fill();
    ctx.strokeStyle = "#372812";
    ctx.stroke();

    updateCartridgeAnimation();
}

/**
 * 
 * Satchel drawing
 * 
 */

function drawSatchel() {
    // ctx = SATCHEL_CANVAS.getContext("2d");
    ctx = CANVAS.getContext("2d");
    ctx.fillStyle = "#C49A70";
    ctx.fillRect(GAME_WIDTH, 0, 250, 710);
    ctx.fillStyle = "#967656";
    ctx.fillRect(GAME_WIDTH + 10, 10, 230, 50);
    ctx.fillRect(GAME_WIDTH + 10, 80, 230, 170);
    ctx.fillRect(GAME_WIDTH + 10, 340, 230, 180);
    drawCommonPrimes();
}

function updateSatchel() {
    drawCommonPrimeScores();
    drawUncommonPrimes();
    drawNumber();
}

const commonPrimes = [new Box(2), new Box(3), new Box(5), new Box(7)];
commonPrimes[0].x = GAME_WIDTH + 20;
commonPrimes[1].x = GAME_WIDTH + 120;
commonPrimes[2].x = GAME_WIDTH + 20;
commonPrimes[3].x = GAME_WIDTH + 120;
commonPrimes[0].y = 100;
commonPrimes[1].y = 100;
commonPrimes[2].y = 190;
commonPrimes[3].y = 190;
commonPrimes.forEach(digit => {
    digit.width = 30;
    digit.height = 40;
    digit.fontSize = "bold 20px sans-serif"
});

function drawCommonPrimes() {
    ctx = CANVAS.getContext("2d");
    commonPrimes.forEach(digit => drawDigit(digit));
}

function drawCommonPrimeScores() {

}

function drawUncommonPrimes() {

}

let numberBox = new Box(100);
numberBox.x = GAME_WIDTH + 70;
numberBox.y = 260;

function drawNumber() {
    ctx = CANVAS.getContext("2d");
    ctx.fillStyle = "#C49A70";
    ctx.fillRect(numberBox.x, numberBox.y, 4 * TILE_WIDTH, numberBox.height);
    if (number != -1) {
        numberBox.value = number;
        if (number > 100) {
            numberBox.width = 3 * TILE_WIDTH - 4 * numberBox.borderWidth;
        } else if (number > 10) {
            numberBox.width = 2 * TILE_WIDTH - 2 * numberBox.borderWidth;
        } else {
            numberBox.width = TILE_WIDTH;
        }
        drawDigit(numberBox);
    }
}

/**
 * 
 * Initial drawing
 * 
 */

// if (WATERFALL_CANVAS.getContext) {
//     drawWaterfallBackdrop();
//     drawCartridge(4, []);
// }
// if (SATCHEL_CANVAS.getContext) {
//     drawSatchel();
// }
if (CANVAS.getContext) {
    drawWaterfallBackdrop();
    drawCartridge(4, []);
    drawSatchel();
}