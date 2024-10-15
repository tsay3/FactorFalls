const LEFT = 0;
const MIDDLE = 1;
const RIGHT = 2;

function drawWaterfallBackdrop() {}
function drawDigits() {}
function drawCartridge() {}
function drawDebug() {}

cancelAnimationFrame(initialUpdate);

function testOutOfBounds() {
    let testBlock = new Digit(0);
    testBlock.gameX = 3;
    testBlock.gameY = TOTAL_POSITIONS_HIGH;
    cartridgeTiles = [[], [], []];
    cartridgeTiles[0].push(new Digit(0), new Digit(0));
    cartridgeTiles[2].push(new Digit(0));
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock, cartridgePosition + LEFT - 1, cartridgePosition + LEFT),
         "Left tile should not be pushed left by left column");
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock, cartridgePosition + LEFT - 4, cartridgePosition + LEFT),
        "Left tile should not be pushed left by left column, big jump");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock, cartridgePosition + MIDDLE - 1, cartridgePosition + MIDDLE),
        "Left tile should not be pushed left by mid column");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock, cartridgePosition + MIDDLE - 4, cartridgePosition + MIDDLE),
        "Left tile should not be pushed left by mid column, big jump");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock, cartridgePosition + RIGHT - 1, cartridgePosition + RIGHT),
        "Left tile should not be pushed left by right column");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock, cartridgePosition + RIGHT - 4, cartridgePosition + RIGHT),
        "Left tile should not be pushed left by right column, big jump");
    testBlock.gameX = 5;
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock, cartridgePosition + LEFT - 1, cartridgePosition + LEFT),
        "Mid tile should not be pushed left below cartridge");
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock, cartridgePosition + LEFT - 4, cartridgePosition + LEFT),
        "Mid tile should not be pushed left below cartridge, big jump");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock, cartridgePosition + MIDDLE - 1, cartridgePosition + MIDDLE),
        "Mid tile should not be pushed left by mid column");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock, cartridgePosition + MIDDLE - 4, cartridgePosition + MIDDLE),
        "Mid tile should not be pushed left by mid column, big jump");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock, cartridgePosition + RIGHT - 1, cartridgePosition + RIGHT),
        "Mid tile should not be pushed left by right column");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock, cartridgePosition + RIGHT - 4, cartridgePosition + RIGHT),
        "Mid tile should not be pushed left by right column, big jump");
}

function testLeftAndRightColumns() {
    let testBlock = new Digit(0);
    testBlock.gameY = TOTAL_POSITIONS_HIGH;
    cartridgeTiles = [[], [], []];
    waterfallTiles = [testBlock];
    cartridgeTiles[0].push(new Digit(0), new Digit(0));
    cartridgeTiles[2].push(new Digit(0), new Digit(0));
}

testOutOfBounds();