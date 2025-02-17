// This file handles the selection of random digits.
// To understand how to play the game, the user might prefer playing an easier version of the game, from a limited pool of digits,
//  and receive some general guidelines for how to operate the game and earn points. 
//  This is also handy for testing purposes, as we can force a smaller pool of numbers to test certain functions.

// let digitNum = 0;
let fullGame = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let tutorial1 = [4];
let tutorial2 = [4, 0, 5];
let tutorial3 = [4, 0, 5, 2];
let tutorial4 = [4, 0, 5, 2, 6, 1];
let tutorial5 = [4, 0, 5, 2, 6, 8, 1, 3];
let gameProgression = [tutorial1, tutorial2, tutorial3, tutorial4, tutorial5, fullGame];

function setDigitValue() {
    return numberTesting();
    let grouping = tutorial3;
    return grouping[Math.floor(Math.random() * grouping.length)];
}

function numberTesting() {
    if (Math.random() > .7) {
        return 4;
    }
    return 1;
}