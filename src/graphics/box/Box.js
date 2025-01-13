class Box {
    constructor(value) {
        this._value = value;
        this._x = 9999;
        this._y = 9999;
        this.borderColor = "#CA8363";
        this.innerColor = "#FFEFCF";
        this.width = TILE_WIDTH;
        this.height = TILE_HEIGHT;
        this.borderWidth = TILE_BORDER;
        this.numberColor = "#7D969F";
        this.fontSize = "bold " + TILE_PLUS_MARGIN + "px sans-serif"
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

    draw(ctx) {
        ctx.fillStyle = this.borderColor;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.innerColor;
        ctx.fillRect(this.x + this.borderWidth, this.y + this.borderWidth, this.width - 2 * this.borderWidth, this.height - 2 * this.borderWidth);
        ctx.fillStyle = this.numberColor;
        ctx.textBaseline = "middle";
        ctx.font = this.fontSize;
        ctx.fillText(this.value, this.x + this.borderWidth + 1, this.y + this.height / 2);
    }
}

