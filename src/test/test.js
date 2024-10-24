const LEFT = 0;
const MIDDLE = 1;
const RIGHT = 2;

// function drawWaterfallBackdrop() {}
// function drawDigits(digitList, ctx) {}
// function drawCartridge() {}
// function drawDebug() {}

// cancelAnimationFrame(initialUpdate);

/**
 * This function tests every case of a block being below the cartridge and pushed around.
 * It should fail in every single case.
 */
function testOutOfBounds() {
    cartridgePosition = 4;
    cartridgeTiles = [[], [], []];
    let testBlock = new Digit(0);
    testBlock.gameX = 3;
    testBlock.gameY = TOTAL_POSITIONS_HIGH;
    cartridgeTiles[0].push(new Digit(0), new Digit(0));
    cartridgeTiles[2].push(new Digit(0));
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock, -1),
         "Left tile should not be pushed left by left column");
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock, -4),
        "Left tile should not be pushed left by left column, big jump");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock, -1),
        "Left tile should not be pushed left by mid column");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock, -4),
        "Left tile should not be pushed left by mid column, big jump");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock, -1),
        "Left tile should not be pushed left by right column");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock, -4),
        "Left tile should not be pushed left by right column, big jump");
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock, 1),
        "Left tile should not be pushed right by left column");
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock, 4),
        "Left tile should not be pushed right by left column, big jump");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock, 1),
        "Left tile should not be pushed right by mid column");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock, 4),
        "Left tile should not be pushed right by mid column, big jump");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock, 1),
        "Left tile should not be pushed right by right column");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock, 4),
        "Left tile should not be pushed right by right column, big jump");
    testBlock.gameX = cartridgePosition + 1;
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock, -1),
        "Mid tile should not be pushed left below cartridge");
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock, -4),
        "Mid tile should not be pushed left below cartridge, big jump");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock, -1),
        "Mid tile should not be pushed left by mid column");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock, -4),
        "Mid tile should not be pushed left by mid column, big jump");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock, -1),
        "Mid tile should not be pushed left by right column");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock, -4),
        "Mid tile should not be pushed left by right column, big jump");
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock, 1),
        "Mid tile should not be pushed right by left column");
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock, 4),
        "Mid tile should not be pushed right by left column, big jump");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock, 1),
        "Mid tile should not be pushed right by mid column");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock, 4),
        "Mid tile should not be pushed right by mid column, big jump");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock, 1),
        "Mid tile should not be pushed right by right column");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock, 4),
        "Mid tile should not be pushed right by right column, big jump");
        testBlock.gameX = cartridgePosition + 3;
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock, -1),
        "Right tile should not be pushed left below cartridge");
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock, -4),
        "Right tile should not be pushed left below cartridge, big jump");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock, -1),
        "Right tile should not be pushed left by mid column");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock, -4),
        "Right tile should not be pushed left by mid column, big jump");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock, -1),
        "Right tile should not be pushed left by right column");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock, -4),
        "Right tile should not be pushed left by right column, big jump");
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock, 1),
        "Right tile should not be pushed right by left column");
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock, 4),
        "Right tile should not be pushed right by left column, big jump");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock, 1),
        "Right tile should not be pushed right by mid column");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock, 4),
        "Right tile should not be pushed right by mid column, big jump");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock, 1),
        "Right tile should not be pushed right by right column");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock, 4),
        "Right tile should not be pushed right by right column, big jump");
}

/**
 * This function tests for a set of blocks being pushed to the left by a column.
 */
function testLeftPushing() {
    cartridgePosition = 4;
    cartridgeTiles = [[], [], []];
    let testBlock1 = new Digit(0);
    let testBlock2 = new Digit(0);
    let testBlock3 = new Digit(0);
    let testBlock4 = new Digit(0);
    testBlock1.gameX = testBlock2.gameX
        = testBlock3.gameX
        = testBlock4.gameX
        = cartridgePosition - 1;
    testBlock1.gameY = TOTAL_POSITIONS_HIGH - 4;
    testBlock2.gameY = TOTAL_POSITIONS_HIGH - 3;
    testBlock3.gameY = TOTAL_POSITIONS_HIGH - 2;
    testBlock4.gameY = TOTAL_POSITIONS_HIGH - 1;
    // waterfallTiles = [testBlock1, testBlock2, testBlock3, testBlock4];
    cartridgeTiles[0].push(new Digit(0), new Digit(0));
    cartridgeTiles[2].push(new Digit(0));
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock1, -1),
        "4 spaces high should not be pushed left by 2-block column");
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock1, -4),
        "4 spaces high should not be pushed left by 2-block column, big jump");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock1, -1),
        "4 spaces high should not be pushed left by empty column");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock1, -4),
        "4 spaces high should not be pushed left by empty column, big jump");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock1, -1),
        "4 spaces high should not be pushed left by distant 1-block column");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock1, -4),
        "4 spaces high should not be pushed left by distant 1-block column, big jump");
    // testBlock2
    console.assert(cartridgeColumnPushesTile(LEFT, testBlock2, -1),
        "3 spaces high should be pushed left by 2-block column");
    console.assert(cartridgeColumnPushesTile(LEFT, testBlock2, -4),
        "3 spaces high should be pushed left by 2-block column, big jump");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock2, -1),
        "3 spaces high should not be pushed left by empty column");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock2, -4),
        "3 spaces high should not be pushed left by empty column, big jump");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock2, -1),
        "3 spaces high should not be pushed left by distant 1-block column");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock2, -4),
        "3 spaces high should not be pushed left by distant 1-block column, big jump");
    // testBlock3
    console.assert(cartridgeColumnPushesTile(LEFT, testBlock3, -1),
        "2 spaces high should be pushed left by 2-block column");
    console.assert(cartridgeColumnPushesTile(LEFT, testBlock3, -4),
        "2 spaces high should be pushed left by 2-block column, big jump");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock3, -1),
        "2 spaces high should not be pushed left by empty column");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock3, -4),
        "2 spaces high should not be pushed left by empty column, big jump");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock3, -1),
        "2 spaces high should not be pushed left by distant 1-block column");
    console.assert(cartridgeColumnPushesTile(RIGHT, testBlock3, -4),
        "2 spaces high should be pushed left by distant 1-block column, big jump");
    // testBlock4
    console.assert(cartridgeColumnPushesTile(LEFT, testBlock4, -1),
        "1 space high should be pushed left by 2-block column");
    console.assert(cartridgeColumnPushesTile(LEFT, testBlock4, -4),
        "1 space high should be pushed left by 2-block column, big jump");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock4, -1),
        "1 space high should not be pushed left by empty column");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock4, -4),
        "1 space high should not be pushed left by empty column, big jump");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock4, -1),
        "1 space high should not be pushed left by distant 1-block column");
    console.assert(cartridgeColumnPushesTile(RIGHT, testBlock4, -4),
        "1 space high should be pushed left by distant 1-block column, big jump");
}

/**
 * This function tests the pushing of block over the left edge.
 * It is a direct copy of the above tests, as they should produce the same results.
 */
function testLeftEdgePushing() {
    cartridgePosition = 1;
    cartridgeTiles = [[], [], []];
    let testBlock1 = new Digit(0);
    let testBlock2 = new Digit(0);
    let testBlock3 = new Digit(0);
    let testBlock4 = new Digit(0);
    testBlock1.gameX = testBlock2.gameX
        = testBlock3.gameX
        = testBlock4.gameX
        = 0;
    testBlock1.gameY = TOTAL_POSITIONS_HIGH - 4;
    testBlock2.gameY = TOTAL_POSITIONS_HIGH - 3;
    testBlock3.gameY = TOTAL_POSITIONS_HIGH - 2;
    testBlock4.gameY = TOTAL_POSITIONS_HIGH - 1;
    cartridgeTiles[0].push(new Digit(0), new Digit(0));
    cartridgeTiles[2].push(new Digit(0));
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock1, -1),
        "4 spaces high should not be pushed left by 2-block column off edge");
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock1, -4),
        "4 spaces high should not be pushed left by 2-block column, big jump off edge");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock1, -1),
        "4 spaces high should not be pushed left by empty column off edge");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock1, -4),
        "4 spaces high should not be pushed left by empty column, big jump off edge");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock1, -1),
        "4 spaces high should not be pushed left by distant 1-block column off edge");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock1, -4),
        "4 spaces high should not be pushed left by distant 1-block column, big jump off edge");
    // testBlock2
    console.assert(cartridgeColumnPushesTile(LEFT, testBlock2, -1),
        "3 spaces high should be pushed left by 2-block column off edge");
    console.assert(cartridgeColumnPushesTile(LEFT, testBlock2, -4),
        "3 spaces high should be pushed left by 2-block column, big jump off edge");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock2, -1),
        "3 spaces high should not be pushed left by empty column off edge");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock2, -4),
        "3 spaces high should not be pushed left by empty column, big jump off edge");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock2, -1),
        "3 spaces high should not be pushed left by distant 1-block column off edge");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock2, -4),
        "3 spaces high should not be pushed left by distant 1-block column, big jump off edge");
    // testBlock3
    console.assert(cartridgeColumnPushesTile(LEFT, testBlock3, -1),
        "2 spaces high should be pushed left by 2-block column off edge");
    console.assert(cartridgeColumnPushesTile(LEFT, testBlock3, -4),
        "2 spaces high should be pushed left by 2-block column, big jump off edge");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock3, -1),
        "2 spaces high should not be pushed left by empty column off edge");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock3, -4),
        "2 spaces high should not be pushed left by empty column, big jump off edge");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock3, -1),
        "2 spaces high should be not pushed left by distant 1-block column off edge");
    console.assert(cartridgeColumnPushesTile(RIGHT, testBlock3, -4),
        "2 spaces high should be pushed left by distant 1-block column, big jump off edge");
    // testBlock4
    console.assert(cartridgeColumnPushesTile(LEFT, testBlock4, -1),
        "1 space high should be pushed left by 2-block column off edge");
    console.assert(cartridgeColumnPushesTile(LEFT, testBlock4, -4),
        "1 space high should be pushed left by 2-block column, big jump off edge");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock4, -1),
        "1 space high should not be pushed left by empty column off edge");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock4, -4),
        "1 space high should not be pushed left by empty column, big jump off edge");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock4, -1),
        "1 space high should be pushed left by distant 1-block column off edge");
    console.assert(cartridgeColumnPushesTile(RIGHT, testBlock4, -4),
        "1 space high should be pushed left by distant 1-block column, big jump off edge");
}

/**
 * This function tests for a set of blocks being pushed to the right by a column.
 */
function testRightPushing() {
    cartridgePosition = 4;
    cartridgeTiles = [[], [], []];
    let testBlock1 = new Digit(0);
    let testBlock2 = new Digit(0);
    let testBlock3 = new Digit(0);
    let testBlock4 = new Digit(0);
    testBlock1.gameX = testBlock2.gameX
        = testBlock3.gameX
        = testBlock4.gameX
        = cartridgePosition + 3;
    testBlock1.gameY = TOTAL_POSITIONS_HIGH - 4;
    testBlock2.gameY = TOTAL_POSITIONS_HIGH - 3;
    testBlock3.gameY = TOTAL_POSITIONS_HIGH - 2;
    testBlock4.gameY = TOTAL_POSITIONS_HIGH - 1;
    cartridgeTiles[0].push(new Digit(0), new Digit(0));
    cartridgeTiles[2].push(new Digit(0));
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock1, 1),
        "4 spaces high should not be pushed right by distant 2-block column");
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock1, 4),
        "4 spaces high should not be pushed right by distant 2-block column, big jump");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock1, 1),
        "4 spaces high should not be pushed right by empty column");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock1, 4),
        "4 spaces high should not be pushed right by empty column, big jump");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock1, 1),
        "4 spaces high should not be pushed right by 1-block column");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock1, 4),
        "4 spaces high should not be pushed right by 1-block column, big jump");
    // testBlock2
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock2, 1),
        "3 spaces high should not be pushed right by distant 2-block column");
    console.assert(cartridgeColumnPushesTile(LEFT, testBlock2, 4),
        "3 spaces high should be pushed right by distant 2-block column, big jump");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock2, 1),
        "3 spaces high should not be pushed right by empty column");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock2, 4),
        "3 spaces high should not be pushed right by empty column, big jump");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock2, 1),
        "3 spaces high should not be pushed right by 1-block column");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock2, 4),
        "3 spaces high should not be pushed left by 1-block column, big jump");
    // testBlock3
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock3, 1),
        "2 spaces high should not be pushed right by distant 2-block column");
    console.assert(cartridgeColumnPushesTile(LEFT, testBlock3, 4),
        "2 spaces high should be pushed right by distant 2-block column, big jump");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock3, 1),
        "2 spaces high should not be pushed right by empty column");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock3, 4),
        "2 spaces high should not be pushed right by empty column, big jump");
    console.assert(cartridgeColumnPushesTile(RIGHT, testBlock3, 1),
        "2 spaces high should be pushed right by 1-block column");
    console.assert(cartridgeColumnPushesTile(RIGHT, testBlock3, 4),
        "2 spaces high should be pushed right by 1-block column, big jump");
    // testBlock4
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock4, 1),
        "1 space high should not be pushed right by distant 2-block column");
    console.assert(cartridgeColumnPushesTile(LEFT, testBlock4, 4),
        "1 space high should be pushed right by distant 2-block column, big jump");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock4, 1),
        "1 space high should not be pushed right by empty column");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock4, 4),
        "1 space high should not be pushed right by empty column, big jump");
    console.assert(cartridgeColumnPushesTile(RIGHT, testBlock4, 1),
        "1 space high should be pushed right by 1-block column");
    console.assert(cartridgeColumnPushesTile(RIGHT, testBlock4, 4),
        "1 space high should be pushed right by 1-block column, big jump");
}

/**
 * This function tests for a set of blocks being pushed to the right by a column along the right edge.
 * Copied from testRightPushing, as the tests should be the same.
 */
function testRightEdgePushing() {
    cartridgePosition = TOTAL_POSITIONS_WIDE - 3;
    cartridgeTiles = [[], [], []];
    let testBlock1 = new Digit(0);
    let testBlock2 = new Digit(0);
    let testBlock3 = new Digit(0);
    let testBlock4 = new Digit(0);
    testBlock1.gameX = testBlock2.gameX
        = testBlock3.gameX
        = testBlock4.gameX
        = cartridgePosition + 3;
    testBlock1.gameY = TOTAL_POSITIONS_HIGH - 4;
    testBlock2.gameY = TOTAL_POSITIONS_HIGH - 3;
    testBlock3.gameY = TOTAL_POSITIONS_HIGH - 2;
    testBlock4.gameY = TOTAL_POSITIONS_HIGH - 1;
    cartridgeTiles[0].push(new Digit(0), new Digit(0));
    cartridgeTiles[2].push(new Digit(0));
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock1, 1),
        "4 spaces high should not be pushed right by distant 2-block column off edge");
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock1, 4),
        "4 spaces high should not be pushed right by distant 2-block column, big jump off edge");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock1, 1),
        "4 spaces high should not be pushed right by empty column off edge");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock1, 4),
        "4 spaces high should not be pushed right by empty column, big jump off edge");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock1, 1),
        "4 spaces high should not be pushed right by 1-block column off edge");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock1, 4),
        "4 spaces high should not be pushed right by 1-block column, big jump off edge");
    // testBlock2
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock2, 1),
        "3 spaces high should not be pushed right by distant 2-block column off edge");
    console.assert(cartridgeColumnPushesTile(LEFT, testBlock2, 4),
        "3 spaces high should be pushed right by distant 2-block column, big jump off edge");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock2, 1),
        "3 spaces high should not be pushed right by empty column off edge");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock2, 4),
        "3 spaces high should not be pushed right by empty column, big jump off edge");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock2, 1),
        "3 spaces high should not be pushed right by 1-block column off edge");
    console.assert(!cartridgeColumnPushesTile(RIGHT, testBlock2, 4),
        "3 spaces high should not be pushed left by 1-block column, big jump off edge");
    // testBlock3
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock3, 1),
        "2 spaces high should not be pushed right by distant 2-block column off edge");
    console.assert(cartridgeColumnPushesTile(LEFT, testBlock3, 4),
        "2 spaces high should be pushed right by distant 2-block column, big jump off edge");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock3, 1),
        "2 spaces high should not be pushed right by empty column off edge");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock3, 4),
        "2 spaces high should not be pushed right by empty column, big jump off edge");
    console.assert(cartridgeColumnPushesTile(RIGHT, testBlock3, 1),
        "2 spaces high should be pushed right by 1-block column off edge");
    console.assert(cartridgeColumnPushesTile(RIGHT, testBlock3, 4),
        "2 spaces high should be pushed right by 1-block column, big jump off edge");
    // testBlock4
    console.assert(!cartridgeColumnPushesTile(LEFT, testBlock4, 1),
        "1 space high should not be pushed right by distant 2-block column off edge");
    console.assert(cartridgeColumnPushesTile(LEFT, testBlock4, 4),
        "1 space high should be pushed right by distant 2-block column, big jump off edge");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock4, 1),
        "1 space high should not be pushed right by empty column off edge");
    console.assert(!cartridgeColumnPushesTile(MIDDLE, testBlock4, 4),
        "1 space high should not be pushed right by empty column, big jump off edge");
    console.assert(cartridgeColumnPushesTile(RIGHT, testBlock4, 1),
        "1 space high should be pushed right by 1-block column off edge");
    console.assert(cartridgeColumnPushesTile(RIGHT, testBlock4, 4),
        "1 space high should be pushed right by 1-block column, big jump off edge");
}

testOutOfBounds();
testLeftPushing();
testLeftEdgePushing();
testRightPushing();
testRightEdgePushing();