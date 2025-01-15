/**
 * 
 * Satchel drawing
 * 
 */

const SATCHEL_BASE_COLOR = "#C49A70";

function drawSatchel() {
    // ctx = SATCHEL_CANVAS.getContext("2d");
    ctx = CANVAS.getContext("2d");
    ctx.fillStyle = SATCHEL_BASE_COLOR;
    ctx.fillRect(GAME_WIDTH, 0, 250, 710);
    ctx.fillStyle = "#967656";
    ctx.fillRect(GAME_WIDTH + 10, 10, 230, 50);
    ctx.fillRect(GAME_WIDTH + 10, 80, 230, 170);
    ctx.fillRect(GAME_WIDTH + 10, 340, 230, 180);
    drawCommonPrimes();
}

const commonPrimes = [new Factor(2), new Factor(3), new Factor(5), new Factor(7)];
commonPrimes[0].x = GAME_WIDTH + 20;
commonPrimes[1].x = GAME_WIDTH + 120;
commonPrimes[2].x = GAME_WIDTH + 20;
commonPrimes[3].x = GAME_WIDTH + 120;
commonPrimes[0].y = 100;
commonPrimes[1].y = 100;
commonPrimes[2].y = 190;
commonPrimes[3].y = 190;
// commonPrimes.forEach(digit => {
//     digit.width = 30;
//     digit.height = 40;
//     digit.fontSize = "bold 20px sans-serif"
// });

function drawCommonPrimes() {
    ctx = CANVAS.getContext("2d");
    commonPrimes.forEach(digit => digit.draw(ctx));
}

function drawCommonPrimeScores() {
    ctx = CANVAS.getContext("2d");
    ctx.fillStyle = "#333";
    ctx.fillRect(GAME_WIDTH + 60, 100, 30, 40);
    ctx.fillRect(GAME_WIDTH + 160, 100, 30, 40);
    ctx.fillRect(GAME_WIDTH + 60, 190, 30, 40);
    ctx.fillRect(GAME_WIDTH + 160, 190, 30, 40);
    ctx.fillStyle = "#DDD";
    ctx.textBaseline = "top";
    ctx.font = "20px system-ui";
    console.log("drawing prime scores");
    ctx.fillText(twosCount.toString(), GAME_WIDTH + 60, 100);
    ctx.fillText(threesCount.toString(), GAME_WIDTH + 160, 100);
    ctx.fillText(fivesCount.toString(), GAME_WIDTH + 60, 190);
    ctx.fillText(sevensCount.toString(), GAME_WIDTH + 160, 190);
}

function drawUncommonPrimes() {

}

let numberBox = new Factor(100);
numberBox.x = GAME_WIDTH + 20;
numberBox.y = 260;

function clearNumberArea() {
    ctx = CANVAS.getContext("2d");
    ctx.fillStyle = "#456";
    ctx.fillRect(numberBox.x-10, numberBox.y-10, 9 * TILE_WIDTH+10, numberBox.height+30);
}
/**
 * Draws a new number in the satchel
 * @param {number} lastNumberBuilt
 */
function drawAddedNumber(lastNumberBuilt) {
    ctx = CANVAS.getContext("2d");
    if (lastNumberBuilt != -1) {
        numberBox.value = lastNumberBuilt;
        numberBox.draw(ctx);
        console.log("number drawn: " + lastNumberBuilt);
    }
}

let allFactorBoxes = [];
let numVisibleFactors = 0;
for (let i = 0; i < 9; i++) {
    let box = new Factor(0);
    box.x = numberBox.x + 50 + i * 10;
    box.y = numberBox.y + (i % 2) * 20;
    allFactorBoxes.push(box);
}

/**
 * 
 * @param {Array} factors 
 */
function drawFactors(factors) {
    // remove all onscreen factor boxes
    // for (let i = onscreenFactorBoxes.length - 1; i >= 0; i--) {
    //     offscreenFactorBoxes.push(onscreenFactorBoxes.pop());
    // }
    numVisibleFactors = factors.length;
    // let baseX = numberBox.x + 100;
    // let baseY = numberBox.y;
    // let offsetX = 0;
    // let offsetY = 0;
    for (let i = 0; i < numVisibleFactors; i++) {
        let box = allFactorBoxes[i];
        box.value = factors[i];
        // box.x = baseX + offsetX;
        // if (box.x + box.width > SCREEN_WIDTH) {
        //     offsetX = 0;
        //     offsetY += box.height + 10;
        //     box.x = baseX + offsetX;
        // }
        // box.y = baseY + offsetY;
        box.draw(CANVAS.getContext("2d"));
        // onscreenFactorBoxes.push(box);
    }
}

function updateSatchel() {
    drawCommonPrimeScores();
    drawUncommonPrimes();
}

if (CANVAS.getContext) {
    drawSatchel();
    updateSatchel();
}