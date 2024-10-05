// The graphics file handles the drawing of the game model onto the canvas of the webpage.

/**
 * Waterfall display & animation
 */

function drawWaterfall() {
    ctx = WATERFALL_CANVAS.getContext("2d");
    ctx.fillStyle = "#D6FBFF";
    ctx.fillRect(0, 0, SIDE_MARGIN_WIDTH * 2 + 10 * totalTileWidth, TOP_MARGIN_HEIGHT + TILE_HEIGHT * 10 + BOTTOM_MARGIN_HEIGHT);
    ctx.fillStyle = "#3A86FF";
    ctx.fillRect(0, TOP_MARGIN_HEIGHT, SIDE_MARGIN_WIDTH * 2 + 10 * totalTileWidth, TILE_HEIGHT * 10 + BOTTOM_MARGIN_HEIGHT);
    ctx.fillStyle = "#69BF4A";
    ctx.fillRect(0, TOP_MARGIN_HEIGHT - 20, SIDE_MARGIN_WIDTH - 5, 20 + TILE_HEIGHT * 10 + BOTTOM_MARGIN_HEIGHT);
    ctx.fillRect(SIDE_MARGIN_WIDTH + 5 + 10 * totalTileWidth, TOP_MARGIN_HEIGHT - 20, SIDE_MARGIN_WIDTH - 5, 20 + TILE_HEIGHT * 10 + BOTTOM_MARGIN_HEIGHT);
}

/**
 * 
 * Digits display and animation
 */

function drawDigits(digitList) {
    ctx = WATERFALL_CANVAS.getContext("2d");
    digitList.forEach((digit) => {
        ctx.fillStyle = digit.borderColor;
        ctx.fillRect(digit.x, digit.y, digit.width, digit.height);
        ctx.fillStyle = digit.innerColor;
        ctx.fillRect(digit.x + digit.borderWidth, digit.y + digit.borderWidth, digit.width - 2 * digit.borderWidth, digit.height - 2 * digit.borderWidth);
        ctx.fillStyle = digit.numberColor;
        ctx.textBaseline = "top";
        ctx.font = "bold 40px sans-serif"
        ctx.fillText(digit.value, digit.x + digit.borderWidth, digit.y + digit.borderWidth + 5);
    });
}

/**
 * 
 * Cartridge display & animation
 * 
 */

var cartridgeAnimIndex = 0;
const cartridgeAnimationX = [0, 1, 3, 7, 13, totalTileWidth-6];

function startCartridgeAnimation(){
    cartridgeAnimIndex = 5;
}

function updateCartridgeAnimation() {
    if (cartridgeAnimIndex > 0) {
        cartridgeAnimIndex--;
    }
}

function drawCartridge(position, direction) {
    ctx = WATERFALL_CANVAS.getContext("2d");
    // left = -1, so offset is added... right = 1, so offset is subtracted
    const baseX = SIDE_MARGIN_WIDTH + (position * totalTileWidth) - direction * cartridgeAnimationX[cartridgeAnimIndex];
    const baseY = TOP_MARGIN_HEIGHT + 9 * TILE_HEIGHT;
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
    
    console.log("Cartridge drawn.");

    updateCartridgeAnimation();
}

/**
 * 
 * Satchel drawing
 * 
 */

function drawSatchel() {
    ctx = SATCHEL_CANVAS.getContext("2d");
    ctx.fillStyle = "#C49A70";
    ctx.fillRect(0, 0, 250, 710);
}

/**
 * 
 * Initial drawing
 * 
 */

if (WATERFALL_CANVAS.getContext) {
    drawWaterfall();
    drawCartridge(4);
}
if (SATCHEL_CANVAS.getContext) {
    drawSatchel();
}