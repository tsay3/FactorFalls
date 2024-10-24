// const WATERFALL_CANVAS = document.getElementById("waterfallCanvas");
// const SATCHEL_CANVAS = document.getElementById("satchelCanvas");
// const EFFECTS_CANVAS = document.getElementById("effectsCanvas");
const CANVAS = document.getElementById("gameCanvas");

// WATERFALL_CANVAS.setAttribute('width', 450);
// WATERFALL_CANVAS.setAttribute('height', 680);
// SATCHEL_CANVAS.setAttribute('width', 250);
// SATCHEL_CANVAS.setAttribute('height', 680);
// EFFECTS_CANVAS.setAttribute('width', 700);
// EFFECTS_CANVAS.setAttribute('height', 680);

// let SCREEN_WIDTH = WATERFALL_CANVAS.clientWidth;
// let SCREEN_HEIGHT = WATERFALL_CANVAS.clientHeight;
CANVAS.setAttribute('width', 700);
CANVAS.setAttribute('height', 680);

let SCREEN_WIDTH = CANVAS.clientWidth;
let SCREEN_HEIGHT = CANVAS.clientHeight;

const GAME_WIDTH = 450;

const TOTAL_POSITIONS_WIDE = 7;
const TOTAL_POSITIONS_HIGH = 12;

const TILE_WIDTH = 34;
const TILE_MARGIN_WIDTH = 6;
const TILE_HEIGHT = 50;
const BOTTOM_MARGIN_HEIGHT = 30;

let TILE_PLUS_MARGIN = TILE_WIDTH + TILE_MARGIN_WIDTH;

let SIDE_MARGIN_WIDTH = (GAME_WIDTH - TILE_PLUS_MARGIN * TOTAL_POSITIONS_WIDE) / 2;
let TOP_MARGIN_HEIGHT = SCREEN_HEIGHT - TILE_HEIGHT * TOTAL_POSITIONS_HIGH - BOTTOM_MARGIN_HEIGHT;

const TILE_FALL_SPEED = 100; // px per second
const DIGIT_SPAWN_RATE = 1650; // this many milliseconds

console.log("WIDTH:", SCREEN_WIDTH);
console.log("HEIGHT:", SCREEN_HEIGHT);