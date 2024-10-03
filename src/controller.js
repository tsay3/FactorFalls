// The controller file handles user input.

function handleMousedown(event) {

    console.log("Mouse event detected.");

    if (event.clientX < (waterfallCanvas.clientWidth * 3 / 7)) {
        moveCartridgeLeft();
    } else if (event.clientX > (waterfallCanvas.clientWidth * 4 / 7)) {
        moveCartridgeRight();
    }
}

// defined in graphics
waterfallCanvas.addEventListener('mousedown', handleMousedown);