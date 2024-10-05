class Box {
    constructor(value) {
        this.value = value;
        this._x = 9999;
        this._y = 9999;
        this.borderColor = "#CA8363";
        this.innerColor = "#FFEFCF";
        this.width = 34;
        this.height = 60;
        this.borderWidth = 5;
        this.numberColor = "#7D969F";
    }

    get x() {
        return this.x;
    }

    get y() {
        return this.y;
    }

    /**
     * @param {number} newX
     */

    set x(newX) {
        this.x = newX;
    }

    /**
     * @param {number} newY
     */

    set y(newY) {
        this.y = newY;
    }
}

class Digit extends Box {
    constructor(value) {
        super(value);
        this.gameX = -1;
        this.gameY = -5;
        this.animationX = 0;
        this.animationY = 0;
    }

    // /**
    //  * @param {number} newX
    //  */
    // set gameX(newX) {
    //     this.gameX = newX;
    // }

    // /**
    //  * @param {number} newY
    //  */
    // set gameY(newY) {
    //     this.gameY = newY;
    // }

    // /**
    //  * @param {number} newX
    //  */
    // set animationX(newX) {
    //     this.animationX = newX;
    // }

    // /**
    //  * @param {number} newY
    //  */
    // set animationY(newY) {
    //     this.animationY = newY;
    // }

    // /**
    //  * @param {number} newX
    //  */
    // set x(newX) {
    //     this.gameX = Math.floor((newX - SIDE_MARGIN_WIDTH) / totalTileWidth);
    //     this.animationX = (newX - SIDE_MARGIN_WIDTH) - this.gameX * totalTileWidth;
    // }

    // /**
    //  * @param {number} newY
    //  */
    // set y(newY) {
    //     this.gameX = Math.floor((newY - TOP_MARGIN_HEIGHT) / TILE_HEIGHT);
    //     this.animationX = (newY - TOP_MARGIN_HEIGHT) - this.gameY * TILE_HEIGHT;
    // }

    get x() {
        if (this.gameX >= 0) {
            return SIDE_MARGIN_WIDTH + this.gameX * totalTileWidth + this.animationX;
        } else {
            return -100;
        }
    }

    get y() {
        if (this.gameY >= 0){
            // on the waterfall
            return TOP_MARGIN_HEIGHT + this.gameY * TILE_HEIGHT + this.animationY;
        } else {
            // in the river
            return TOP_MARGIN_HEIGHT + this.gameY * TILE_HEIGHT * -0.25 - this.animationY * 0.25;
        }
    }
}