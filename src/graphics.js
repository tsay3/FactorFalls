// The graphics file handles the drawing of the game model onto the canvas of the webpage.

const tileWidth = 34;
const tileMarginWidth = 6;
var totalTileWidth = tileWidth + tileMarginWidth;
const tileHeight = 50;
const sideMarginWidth = 25;
const bottomMarginHeight = 30;
const topMarginHeight = 150;

const tileFallSpeed = 100; // px per second

const waterfallCanvas = document.getElementById("waterfallCanvas");
const satchelCanvas = document.getElementById("satchelCanvas");

function drawWaterfall() {
    ctx = waterfallCanvas.getContext("2d");
    ctx.fillStyle = "#D6FBFF";
    ctx.fillRect(0, 0, sideMarginWidth * 2 + 10 * totalTileWidth, topMarginHeight + tileHeight * 10 + bottomMarginHeight);
    ctx.fillStyle = "#3A86FF";
    ctx.fillRect(0, topMarginHeight, sideMarginWidth * 2 + 10 * totalTileWidth, tileHeight * 10 + bottomMarginHeight);
    ctx.fillStyle = "#69BF4A";
    ctx.fillRect(0, topMarginHeight - 20, sideMarginWidth - 5, 20 + tileHeight * 10 + bottomMarginHeight);
    ctx.fillRect(sideMarginWidth + 5 + 10 * totalTileWidth, topMarginHeight - 20, sideMarginWidth - 5, 20 + tileHeight * 10 + bottomMarginHeight);
}

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
    ctx = waterfallCanvas.getContext("2d");
    // left = -1, so offset is added... right = 1, so offset is subtracted
    const baseX = sideMarginWidth + (position * totalTileWidth) - direction * cartridgeAnimationX[cartridgeAnimIndex];
    const baseY = topMarginHeight + 9 * tileHeight;
    ctx.beginPath();
    ctx.moveTo(baseX, baseY + tileHeight / 2);
    ctx.lineTo(baseX, baseY + tileHeight);
    ctx.lineTo(baseX + tileWidth, baseY + tileHeight);
    ctx.lineTo(baseX + tileWidth + tileMarginWidth / 2, baseY + tileHeight * 4 / 5);
    ctx.lineTo(baseX + tileWidth + tileMarginWidth, baseY + tileHeight);
    ctx.lineTo(baseX + 2 * tileWidth + tileMarginWidth, baseY + tileHeight);
    ctx.lineTo(baseX + 2 * tileWidth + tileMarginWidth * 1.5, baseY + tileHeight * 4 / 5);
    ctx.lineTo(baseX + 2 * tileWidth + tileMarginWidth * 2, baseY + tileHeight);
    ctx.lineTo(baseX + 3 * tileWidth + tileMarginWidth * 2, baseY + tileHeight);
    ctx.lineTo(baseX + 3 * tileWidth + tileMarginWidth * 2, baseY + tileHeight / 2);
    ctx.bezierCurveTo(baseX + 3 * tileWidth + tileMarginWidth * 2, baseY + tileHeight / 2,
                        baseX + 3 * tileWidth + tileMarginWidth * 3, baseY + tileHeight * 4 / 5,
                        baseX + 3 * tileWidth + tileMarginWidth * 3, baseY + tileHeight);
    ctx.bezierCurveTo(baseX + 3 * tileWidth + tileMarginWidth * 3, baseY + tileHeight + 10,
                        baseX + 3 * tileWidth + tileMarginWidth * 2, baseY + tileHeight + 10,
                        baseX + 2.5 * tileWidth + tileMarginWidth * 2, baseY + tileHeight + 10);
    // 2nd knuckle
    ctx.bezierCurveTo(baseX + 2.25 * tileWidth + tileMarginWidth * 2, baseY + tileHeight + 10,
                        baseX + 2.25 * tileWidth + tileMarginWidth * 2, baseY + tileHeight + 5,
                        baseX + 2 * tileWidth + tileMarginWidth * 1.5, baseY + tileHeight + 5);
    ctx.bezierCurveTo(baseX + 1.75 * tileWidth + tileMarginWidth, baseY + tileHeight + 5,
                        baseX + 1.75 * tileWidth + tileMarginWidth, baseY + tileHeight + 10,
                        baseX + 1.5 * tileWidth + tileMarginWidth, baseY + tileHeight + 10);
    // 1st knuckle
    ctx.bezierCurveTo(baseX + 1.25 * tileWidth + tileMarginWidth, baseY + tileHeight + 10,
                        baseX + 1.25 * tileWidth + tileMarginWidth, baseY + tileHeight + 5,
                        baseX + tileWidth + tileMarginWidth * .5, baseY + tileHeight + 5);
    ctx.bezierCurveTo(baseX + .75 * tileWidth, baseY + tileHeight + 5,
                        baseX + .75 * tileWidth, baseY + tileHeight + 10,
                        baseX + .5 * tileWidth, baseY + tileHeight + 10);
    ctx.bezierCurveTo(baseX, baseY + tileHeight + 5,
                        baseX - tileMarginWidth, baseY + tileHeight + 10,
                        baseX - tileMarginWidth, baseY + tileHeight);
    ctx.bezierCurveTo(baseX - tileMarginWidth, baseY + tileHeight * 4 / 5,
                        baseX, baseY + tileHeight / 2,
                        baseX, baseY + tileHeight / 2);
    ctx.closePath();
    ctx.fillStyle = "#B28440";
    ctx.fill();
    ctx.strokeStyle = "#372812";
    ctx.stroke();
    
    console.log("Cartridge drawn.");

    updateCartridgeAnimation();
}

function drawSatchel() {
    ctx = satchelCanvas.getContext("2d");
    ctx.fillStyle = "#C49A70";
    ctx.fillRect(0, 0, 250, 710);
}

if (waterfallCanvas.getContext) {
    drawWaterfall();
    drawCartridge(4);
}
if (satchelCanvas.getContext) {
    drawSatchel();
}