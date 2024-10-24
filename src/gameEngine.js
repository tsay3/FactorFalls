// The game file contains the infrastructure


function update() {
    if ((document.timeline.currentTime - updateTime) / 30 > 1) {
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

// let digitNum = 0;
// let fullGame = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function setDigitValue() {
    let tutorial1 = [4];
    let tutorial2 = [4, 0, 5];
    let tutorial3 = [4, 0, 5, 2];
    let tutorial4 = [4, 0, 5, 2, 6, 1];
    let tutorial5 = [4, 0, 5, 2, 6, 8, 1, 3];

    return tutorial3[Math.floor(Math.random() * tutorial3.length)];
}


let updateTime = document.timeline.currentTime;
let digitAddTime = document.timeline.currentTime;

let initialUpdate = requestAnimationFrame(update);