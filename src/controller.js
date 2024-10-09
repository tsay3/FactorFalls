// The controller file handles user input.

/**
 * Mouse controls.
 * @param {MouseEvent} event 
 */

function handleMousedown(event) {
    xPosLower = Math.max(Math.floor((event.pageX - SIDE_MARGIN_WIDTH) / TOTAL_TILE_WIDTH - 1), 0);
    xPos = Math.min(xPosLower, TOTAL_POSITIONS_WIDE - 3);
    moveCartridgeTo(xPos);
}

// function oldHandleMousedown(event) {
//     if (event.pageX < (SCREEN_WIDTH * 3 / 7)) {
//         moveCartridgeLeft();
//     } else if (event.pageX > (SCREEN_WIDTH * 4 / 7)) {
//         moveCartridgeRight();
//     }
// }

/**
 * Touch controls.
 */
let numberOfTouches = 0;

function handleTouchstart() {
    numberOfTouches++;
}

function handleTouchend() {
    numberOfTouches--;
}

function handleTouchmove(event) {
    if (numberOfTouches == 1) {
        xPos = Math.min(Math.floor((event.pageX - SIDE_MARGIN_WIDTH) / TOTAL_TILE_WIDTH - 1), TOTAL_POSITIONS_WIDE - 3);
        moveCartridgeTo(xPos);
    }
}

/**
 * Keyboard controls.
 * @param {KeyboardEvent} event 
 */

function handleKeydown(event) {
    if (event.key == "ArrowLeft") {
        moveCartridgeLeft();
    } else if (event.key == "ArrowRight") {
        moveCartridgeRight();
    }
}

WATERFALL_CANVAS.addEventListener('mousedown', handleMousedown);
WATERFALL_CANVAS.addEventListener('touchmove', handleTouchmove);
WATERFALL_CANVAS.addEventListener('touchstart', handleTouchstart);
WATERFALL_CANVAS.addEventListener('touchend', handleTouchend);
window.addEventListener('keydown', handleKeydown);