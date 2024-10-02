// The graphics file handles the drawing of the game model onto the canvas of the webpage.

function drawWaterfall(ctx) {
    ctx.fillStyle = "#D6FBFF";
    ctx.fillRect(0, 0, 450, 710);
    ctx.fillStyle = "#3A86FF";
    ctx.fillRect(0, 150, 450, 560);
    ctx.fillStyle = "#69BF4A";
    ctx.fillRect(0, 130, 20, 580);
    ctx.fillRect(430, 130, 20, 580);
}

function drawCartridge(ctx) {

}

function drawSatchel(ctx) {
    ctx.fillStyle = "#C49A70";
    ctx.fillRect(0, 0, 250, 710);
}

const waterfallCanvas = document.getElementById("waterfall");
const satchelCanvas = document.getElementById("satchel");

if (waterfallCanvas.getContext) {
    drawWaterfall(waterfallCanvas.getContext("2d"));
}
if (satchelCanvas.getContext) {
    drawSatchel(satchelCanvas.getContext("2d"));
}

console.log("Drawn to canvas.");