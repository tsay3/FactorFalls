// The controller file handles user input.

function handleMousedown(event) {

    console.log("Mouse event detected.");

    if (event.clientX < (WATERFALL_CANVAS.clientWidth * 3 / 7)) {
        moveCartridgeLeft();
    } else if (event.clientX > (WATERFALL_CANVAS.clientWidth * 4 / 7)) {
        moveCartridgeRight();
    }
}

// defined in constants
WATERFALL_CANVAS.addEventListener('mousedown', handleMousedown);