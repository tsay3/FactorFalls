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

function moveCartridgeTo(xPos) {
    if (xPos >= 0 && xPos <= (TOTAL_POSITIONS_WIDE - 2)) {
        console.log("moved to", xPos);
        cartridgeDirection = xPos - cartridgePosition;
        cartridgePosition = xPos;
        updateCartridgeTiles(cartridgeDirection);
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
                if (bottomRowIsComplete()) {
                    eliminateBottomRow();
                }
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

/**
 * Check if there exists a completed row. Returns true if so.
 */

function bottomRowIsComplete() {
    return ((cartridgeTiles[0].length > 0) && (cartridgeTiles[1].length > 0) && (cartridgeTiles[2].length > 0));
}

function eliminateBottomRow() {
    let hundreds = cartridgeTiles[0].shift();
    let tens = cartridgeTiles[1].shift();
    let ones = cartridgeTiles[2].shift();
    let number = 100 * hundreds.value + 10 * tens.value + ones.value;
    offScreenTiles.push(hundreds);
    offScreenTiles.push(tens);
    offScreenTiles.push(ones);
    console.log("Output =", number, "; half of ", number * 2); // for testing out the number
    startCartridgeTileFallAnimation();
    cartridgeTiles.forEach((column) => column.forEach((digit) => {
        digit.gameY++;
    }));
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

        drawWaterfallBackdrop();
        drawDigits(waterfallTiles);
        drawCartridge(cartridgePosition, cartridgeDirection, cartridgeTiles);
        updateTime = document.timeline.currentTime;
    }
    
    if ((document.timeline.currentTime - digitAddTime) / DIGIT_SPAWN_RATE > 1) {
        if (offScreenTiles.length > 0) {
            addDigit();
        }
        digitAddTime = document.timeline.currentTime;
    }
    requestAnimationFrame(update);
}

let digitNum = 0;

function addDigit() {
    let digit = offScreenTiles.pop();
    digit.gameX = Math.floor((Math.random() * TOTAL_POSITIONS_WIDE + Math.random() * TOTAL_POSITIONS_WIDE)/2);
    digit.gameY = 0;
    digit.value = digitNum;
    digitNum++;
    if (digitNum >= 10) digitNum = 0;
    waterfallTiles.push(digit);
}

/**
 * Initialize tiles
 */

for (let i = 0; i < 10; i++) {
    offScreenTiles.push(new Digit(0));
}

let updateTime = document.timeline.currentTime;
let digitAddTime = document.timeline.currentTime;

requestAnimationFrame(update);