class Box {
    constructor(value) {
        this._value = value;
        this._x = 9999;
        this._y = 9999;
        this.borderColor = "#CA8363";
        this.innerColor = "#FFEFCF";
        this.width = TILE_WIDTH;
        this.height = TILE_HEIGHT;
        this.borderWidth = 5;
        this.numberColor = "#7D969F";
        this.fontSize = "bold " + TOTAL_TILE_WIDTH + "px sans-serif"
    }

    get value() {
        return this._value;
    }

    /**
     * @param {number} newValue
     */
    set value(newValue) {
        this._value = newValue;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    /**
     * @param {number} newX
     */

    set x(newX) {
        this._x = newX;
    }

    /**
     * @param {number} newY
     */

    set y(newY) {
        this._y = newY;
    }
}

class Factor extends Box {
    constructor(value) {
        super(value);
        this.innerColor = "#CCC";
        this.borderColor = "#977";
        let fontValue = TILE_WIDTH * 2 / 3;
        this.height = TILE_HEIGHT * 2 / 3;
        this.width = fontValue;
        if (value >= 100) {
            this.width = 3 * fontValue - 4 * this.borderWidth;
        } else if (value >= 10) {
            this.width = 2 * fontValue - 2 * this.borderWidth;
        }
        this.borderWidth = 4;
        this.numberColor = "#999";
        this.fontSize = "bold " + fontValue + "px sans-serif"
    }

    get value() {
        return this._value;
    }

    /**
     * @param {number} newValue
     */
    set value(newValue) {
        this._value = newValue;
        this.width = TILE_WIDTH * 2 / 3;
        if (newValue >= 100) {
            this.width = 3 * this.width - 4 * this.borderWidth;
        } else if (newValue >= 10) {
            this.width = 2 * this.width - 2 * this.borderWidth;
        }
    }
}

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
            return SIDE_MARGIN_WIDTH + this.gameX * TOTAL_TILE_WIDTH + this.offsetX;
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