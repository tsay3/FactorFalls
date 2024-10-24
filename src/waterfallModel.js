

let cartridgePosition = Math.floor(TOTAL_POSITIONS_WIDE / 2 - 1);
let cartridgeTiles = [[], [], []];

let offScreenTiles = [];
let riverTiles = [];
let waterfallTiles = [];
let pushedTiles = [];
let tileGroups = [];

/**
 * Initialize tiles
 */

for (let i = 0; i < 15; i++) {
    offScreenTiles.push(new Digit(0));
}

function addDigit() {
    let digit = offScreenTiles.pop();
    digit.gameX = Math.floor((Math.random() * TOTAL_POSITIONS_WIDE + Math.random() * TOTAL_POSITIONS_WIDE)/2);
    digit.gameY = 0;
    digit.value = setDigitValue();
    // digitNum++;
    waterfallTiles.push(digit);
}

function moveCartridgeLeft() {
    moveCartridgeTo(cartridgePosition - 1);
}

function moveCartridgeRight() {
    moveCartridgeTo(cartridgePosition + 1);
}

function cartridgeColumnPushesTile(columnIndex, tile, movement) {
    if (tile.gameY >= TOTAL_POSITIONS_HIGH) return false;
    if (cartridgeTiles[columnIndex].length == 0) return false;
    let offsetPosition = cartridgePosition + columnIndex + movement;
    let leftPosition = Math.min(offsetPosition, cartridgePosition + columnIndex);
    let rightPosition = Math.max(offsetPosition, cartridgePosition + columnIndex);
    if ((tile.gameX >= leftPosition) && (tile.gameX <= rightPosition)) {
        return (tile.gameY + 1 >= TOTAL_POSITIONS_HIGH - cartridgeTiles[columnIndex].length);
    }
    return false;
}

function moveCartridgeTo(xPos) {
    const LEFT = 0;
    const MIDDLE = 1;
    const RIGHT = 2;
    let movement = xPos - cartridgePosition;
    pushedTiles.forEach((tile) => {
        tile.offsetX = 0;
    });
    pushedTiles = [];
    if (xPos >= 0 && xPos <= (TOTAL_POSITIONS_WIDE - 3)) {
        tileGroups.forEach((group) => {
            //TODO: complete this
        });
        waterfallTiles.forEach((tile) => {
            if ((xPos < cartridgePosition)) {
                if (cartridgeColumnPushesTile(LEFT, tile, movement)) {
                    if (xPos == 0) {
                        xPos = 1;
                        if (tile.gameX != 0) {
                            tile.gameX = 0;
                            addTileToPushedTiles(tile);
                        }
                    } else {
                        tile.gameX = xPos - 1;
                        addTileToPushedTiles(tile);
                    }
                } else if (cartridgeColumnPushesTile(MIDDLE, tile, movement)) {
                    tile.gameX = xPos;
                    addTileToPushedTiles(tile);
                } else if (cartridgeColumnPushesTile(RIGHT, tile, movement)) {
                    tile.gameX = xPos + 1;
                    addTileToPushedTiles(tile);
                }
            } else if ((cartridgePosition < xPos)) {
                if (cartridgeColumnPushesTile(RIGHT, tile, movement)) {
                    if (xPos == TOTAL_POSITIONS_WIDE - 3) {
                        xPos = TOTAL_POSITIONS_WIDE - 4;
                        if (tile.gameX != TOTAL_POSITIONS_WIDE - 1){
                            tile.gameX = TOTAL_POSITIONS_WIDE - 1;
                            addTileToPushedTiles(tile);
                        }
                    } else {
                        tile.gameX = xPos + 3;
                        addTileToPushedTiles(tile);
                    }
                } else if (cartridgeColumnPushesTile(MIDDLE, tile, movement)) {
                    tile.gameX = xPos + 2;
                    addTileToPushedTiles(tile);
                } else if (cartridgeColumnPushesTile(LEFT, tile, movement)) {
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


function updateCartridgeTiles(offset) {
    cartridgeTiles.forEach((column) => {
        column.forEach((digit) => {
            digit.gameX += offset;
        })
    })
}

function addTileToPushedTiles(tile) {
    if (pushedTiles.indexOf(tile) == -1) {
        pushedTiles.push(tile);
    }
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
            if (TOTAL_POSITIONS_HIGH - (digit.gameY + 1) == cartridgeTiles[digitInCartridgePosition].length) {
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
    let lastNumberBuilt = 100 * hundreds.value + 10 * tens.value + ones.value;
    offScreenTiles.push(hundreds);
    offScreenTiles.push(tens);
    offScreenTiles.push(ones);
    startCartridgeTileFallAnimation();
    cartridgeTiles.forEach((column) => column.forEach((digit) => {
        digit.gameY++;
    }));
    addNumberToSatchel(lastNumberBuilt);
}

/**
 * Update the waterfall model.
 */

function updateWaterfallModel() {
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
    drawDigits(waterfallTiles, CANVAS.getContext("2d"));
    drawCartridge(cartridgePosition, cartridgeTiles);
}