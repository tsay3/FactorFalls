// The game file controls the internal model that the game is built on.

let cartridgePosition = Math.floor(TOTAL_POSITIONS_WIDE / 2 - 1);
let cartridgeDirection = 0;

let offScreenTiles = [];
let riverTiles = [];
let waterfallTiles = [];
let cartridgeTiles = [[], [], []];

function moveCartridgeLeft() {
    if (cartridgePosition > 0) {
        cartridgeDirection = -1;
        cartridgePosition--;
        updateCartridgeTiles(-1);
        startCartridgeAnimation();
    }
}

function moveCartridgeRight() {
    if (cartridgePosition < (TOTAL_POSITIONS_WIDE - 3)) {
        cartridgeDirection = 1;
        cartridgePosition++;
        updateCartridgeTiles(1);
        startCartridgeAnimation();
    }
}

function updateCartridgeTiles(offset) {
    cartridgeTiles.forEach((column) => {
        column.forEach((digit) => {
            digit.gameX += offset;
        })
    })
}

/**
 * Update a falling waterfall tile.
 * Returns true if it remains a waterfall tile.
 */
function updateFallingTile(digit) {
    digit.offsetY += TILE_FALL_SPEED / 1000 * (document.timeline.currentTime - updateTime);
    while (digit.offsetY > TILE_HEIGHT) {
        digit.gameY++;
        if (digit.gameX >= cartridgePosition && digit.gameX <= cartridgePosition + 2) {
            // Digit is within the cartridge
            let digitInCartridgePosition = (digit.gameX - cartridgePosition);
            if (10 - (digit.gameY + 1) == cartridgeTiles[digitInCartridgePosition].length) {
                cartridgeTiles[digitInCartridgePosition].push(digit);
                digit.offsetY = 0;
                return false;
            }
        }
        digit.offsetY -= TILE_HEIGHT;
    }
    if (digit.gameY > TOTAL_POSITIONS_HIGH + 1) {
        return false;
    }
    return true;
}

function update() {
    if ((document.timeline.currentTime - updateTime) / 30 > 1) {
        let newWaterfallTiles = [];
        waterfallTiles.forEach((digit) => {
            if (updateFallingTile(digit)) {
                newWaterfallTiles.push(digit);
            }
            if (digit.gameY > TOTAL_POSITIONS_HIGH + 1) {
                offScreenTiles.push(digit);
            }
        });
        waterfallTiles = newWaterfallTiles;
        updateCartridgeAnimation();

        drawWaterfallBackdrop();
        drawDigits(waterfallTiles);
        drawCartridge(cartridgePosition, cartridgeDirection, cartridgeTiles);
        updateTime = document.timeline.currentTime;
    }
    
    if ((document.timeline.currentTime - digitAddTime) / 1000 > 1) {
        if (offScreenTiles.length > 0) {
            let digit = offScreenTiles.pop();
            digit.gameX = Math.floor(Math.random() * TOTAL_POSITIONS_WIDE);
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

/**
 * Initialize tiles
 */

for (let i = 0; i < 10; i++) {
    offScreenTiles.push(new Digit(0));
}

let updateTime = document.timeline.currentTime;
let digitAddTime = document.timeline.currentTime;
let digitNum = 0;

requestAnimationFrame(update);