// The game file controls the internal model that the game is built on.

let cartridgePosition = Math.floor(TOTAL_POSITIONS_WIDE / 2 - 1);

let offScreenTiles = [];
let riverTiles = [];
let waterfallTiles = [];
let pushedTiles = [];
let tileGroups = [];
let cartridgeTiles = [[], [], []];

function moveCartridgeLeft() {
    moveCartridgeTo(cartridgePosition - 1);
}

function moveCartridgeRight() {
    moveCartridgeTo(cartridgePosition + 1);
}

function cartridgeColumnPushesTile(columnIndex, tile, leftPosition, rightPosition) {
    if ((tile.gameX >= leftPosition) && (tile.gameX <= rightPosition)) {
        return (tile.gameY + 3 >= TOTAL_POSITIONS_HIGH - cartridgeTiles[columnIndex].length);
    }
    return false;
}

function moveCartridgeTo(xPos) {
    const LEFT = 0;
    const MIDDLE = 1;
    const RIGHT = 2;
    pushedTiles.forEach((tile) => {
        tile.offsetX = 0;
    })
    pushedTiles = [];
    if (xPos >= 0 && xPos <= (TOTAL_POSITIONS_WIDE - 3)) {
        tileGroups.forEach((group) => {
            //TODO: complete this
        });
        waterfallTiles.forEach((tile) => {
            if ((tile.gameY < TOTAL_POSITIONS_HIGH) && (xPos < cartridgePosition)) {
                console.log("Moving left");
                if (cartridgeColumnPushesTile(LEFT, tile, xPos + LEFT, cartridgePosition + LEFT)) {
                    if (xPos == 0) {
                        xPos = 1; tile.gameX = 0;
                        addTileToPushedTiles(tile);
                    } else {
                        tile.gameX = xPos - 1;
                        addTileToPushedTiles(tile);
                    }
                } else if (cartridgeColumnPushesTile(MIDDLE, tile, xPos + MIDDLE, cartridgePosition + MIDDLE)) {
                    tile.gameX = xPos;
                    addTileToPushedTiles(tile);
                } else if (cartridgeColumnPushesTile(RIGHT, tile, xPos + RIGHT, cartridgePosition + RIGHT)) {
                    tile.gameX = xPos + 1;
                    addTileToPushedTiles(tile);
                }
            } else if ((tile.gameY < TOTAL_POSITIONS_HIGH) && (cartridgePosition < xPos)) {
                console.log("Moving right");
                if (cartridgeColumnPushesTile(RIGHT, tile, cartridgePosition + RIGHT, xPos + RIGHT)) {
                    if (xPos == TOTAL_POSITIONS_WIDE - 3) {
                        xPos = TOTAL_POSITIONS_WIDE - 4;
                        tile.gameX = TOTAL_POSITIONS_WIDE - 3;
                        addTileToPushedTiles(tile);
                    } else {
                        tile.gameX = xPos + 3;
                        addTileToPushedTiles(tile);
                    }
                } else if (cartridgeColumnPushesTile(MIDDLE, tile, cartridgePosition + MIDDLE, xPos + MIDDLE)) {
                    tile.gameX = xPos + 2;
                    addTileToPushedTiles(tile);
                } else if (cartridgeColumnPushesTile(LEFT, tile, cartridgePosition + LEFT, xPos + LEFT)) {
                    tile.gameX = xPos + 1;
                    addTileToPushedTiles(tile);
                }
            }
        });
        // Update the cartridge position
        console.log("moved to", xPos);
        cartridgeDirection = xPos - cartridgePosition;
        cartridgePosition = xPos;
        updateCartridgeTiles(cartridgeDirection);
        startCartridgeAnimation();
    }
}

function addTileToPushedTiles(tile) {
    if (pushedTiles.indexOf(tile) == -1) {
        pushedTiles.push(tile);
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
    console.log("Updated");
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
        drawCartridge(cartridgePosition, cartridgeTiles);
        drawDebug();
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

for (let i = 0; i < 15; i++) {
    offScreenTiles.push(new Digit(0));
}

let updateTime = document.timeline.currentTime;
let digitAddTime = document.timeline.currentTime;

let initialUpdate = requestAnimationFrame(update);