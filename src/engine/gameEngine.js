// This file contains the basic infrastructure to keep the game running. It is the "entry point" for the rest of the game engine.
// It currently includes the update function, and some variables to handle game cycles.


function update() {
    if ((document.timeline.currentTime - updateTime) / GAME_UPDATE_RATE > 1) {
        updateWaterfallModel();
        if (debugMode) drawDebug();
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


let updateTime = document.timeline.currentTime;
let digitAddTime = document.timeline.currentTime;

let initialUpdate = requestAnimationFrame(update);