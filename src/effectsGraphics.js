/**
 * Debug drawing
 */

let debugMode = false;

function drawDebug() {
    ctx = CANVAS.getContext("2d");
    // ctx.clearRect(0, 0, EFFECTS_CANVAS.width, EFFECTS_CANVAS.height);
    // background
    ctx.fillStyle="#5553";
    ctx.fillRect(10, 10, GAME_WIDTH - 10, 670);
    // game edges
    ctx.fillStyle="#2223";
    ctx.fillRect(SIDE_MARGIN_WIDTH, TOP_MARGIN_HEIGHT, 5, SCREEN_HEIGHT);
    ctx.fillRect(SIDE_MARGIN_WIDTH + TOTAL_TILE_WIDTH * TOTAL_POSITIONS_WIDE,
        TOP_MARGIN_HEIGHT, 5, SCREEN_HEIGHT);
    // 
    ctx.fillStyle="#F003";
    waterfallTiles.forEach((tile) => {
        ctx.fillRect(tile.gameX * TOTAL_TILE_WIDTH + SIDE_MARGIN_WIDTH,
            tile.gameY * TILE_HEIGHT + TOP_MARGIN_HEIGHT,
            TOTAL_TILE_WIDTH, TILE_HEIGHT);
    });
    //
    ctx.fillStyle="#0F03";
    cartridgeTiles.forEach((column) => column.forEach((tile) => {
        ctx.fillRect(tile.gameX * TOTAL_TILE_WIDTH + SIDE_MARGIN_WIDTH,
            tile.gameY * TILE_HEIGHT + TOP_MARGIN_HEIGHT,
            TOTAL_TILE_WIDTH, TILE_HEIGHT);
    }));
    // cartridge
    ctx.fillStyle="#6603";
    ctx.fillRect(cartridgePosition * TOTAL_TILE_WIDTH + SIDE_MARGIN_WIDTH,
        TOTAL_POSITIONS_HIGH * TILE_HEIGHT + TOP_MARGIN_HEIGHT,
        3 * TOTAL_TILE_WIDTH, 10);
}