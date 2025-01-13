class Digit extends Box {
    constructor(value) {
        super(value);
        this.gameX = -1;
        this.gameY = -5;
        this.offsetX = 0;
        this.offsetY = 0;
    }

    get x() {
        if (this.gameX >= 0) {
            return SIDE_MARGIN_WIDTH + this.gameX * TILE_PLUS_MARGIN + this.offsetX;
        } else {
            return -100;
        }
    }

    get y() {
        if (this.gameY >= 0){
            // on the waterfall
            return TOP_MARGIN_HEIGHT + this.gameY * TILE_HEIGHT + this.offsetY;
        } else {
            // in the river
            return TOP_MARGIN_HEIGHT + this.gameY * TILE_HEIGHT * -0.25 - this.offsetY * 0.25;
        }
    }
}