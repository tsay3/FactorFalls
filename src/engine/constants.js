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
const SATCHEL_WIDTH = 250;
const SATCHEL_BORDER = 10;
const SATCHEL_SCORE_HEIGHT = 50;
const SATCHEL_COMMON_HEIGHT = 170;
const SATCHEL_UNCOMMON_HEIGHT = 180;

const SATCHEL_COMMON_BASE_Y = SATCHEL_SCORE_HEIGHT + 3 * SATCHEL_BORDER;
const SATCHEL_UNCOMMON_BASE_Y = SATCHEL_COMMON_BASE_Y + SATCHEL_COMMON_HEIGHT + 90;

const TOTAL_POSITIONS_WIDE = 7;
const TOTAL_POSITIONS_HIGH = 12;
const FACTORS_PER_SET = 3;
const UNCOMMON_FACTOR_COUNT = 8;

const TILE_WIDTH = 34;
const FONT_VALUE = 22; // TILE_WIDTH * 2 / 3;
const TILE_MARGIN_WIDTH = 6;
const TILE_HEIGHT = 50;
const TILE_BORDER = 5;
const FACTOR_HEIGHT = TILE_HEIGHT * 2 / 3;
const BOTTOM_MARGIN_HEIGHT = 30;

const DIGIT_TILE_COLOR = "";
const DIGIT_NUMBER_COLOR = "";
const DIGIT_BORDER_COLOR = "";
const FACTOR_TILE_COLOR = "";
const FACTOR_NUMBER_COLOR = "";
const FACTOR_BORDER_COLOR = "";
const FACTOR_COUNT_BORDER_COLOR = "#550";
const FACTOR_COUNT_INNER_COLOR = "#CC0";

let TILE_PLUS_MARGIN = TILE_WIDTH + TILE_MARGIN_WIDTH;

let SIDE_MARGIN_WIDTH = (GAME_WIDTH - TILE_PLUS_MARGIN * TOTAL_POSITIONS_WIDE) / 2;
let TOP_MARGIN_HEIGHT = SCREEN_HEIGHT - TILE_HEIGHT * TOTAL_POSITIONS_HIGH - BOTTOM_MARGIN_HEIGHT;

const TILE_FALL_SPEED = 100; // px per second
const DIGIT_SPAWN_RATE = 1650; // this many milliseconds
const GAME_UPDATE_RATE = 30;

console.log("WIDTH:", SCREEN_WIDTH);
console.log("HEIGHT:", SCREEN_HEIGHT);