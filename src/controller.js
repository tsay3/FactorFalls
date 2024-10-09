// The controller file handles user input.

function oldHandleMousedown(event) {

    console.log("Mouse event detected.");

    if (event.clientX < (WATERFALL_CANVAS.clientWidth * 3 / 7)) {
        moveCartridgeLeft();
    } else if (event.clientX > (WATERFALL_CANVAS.clientWidth * 4 / 7)) {
        moveCartridgeRight();
    }
}

function handleMousedown(event) {
    
}

function handleKeyboard(event) {
    if (event.key == "ArrowLeft") {
        moveCartridgeLeft();
    } else if (event.key == "ArrowRight") {
        moveCartridgeRight();
    }
}

// defined in constants
WATERFALL_CANVAS.addEventListener('mousedown', handleMousedown);
window.addEventListener('keydown', handleKeyboard);