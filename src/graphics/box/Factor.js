class Factor extends Box {
    constructor(value) {
        super(value);
        this.borderWidth = TILE_BORDER - 1;
        this.innerColor = "#CCC";
        this.borderColor = "#977";
        this.height = TILE_HEIGHT * 2 / 3;
        this.adjustWidth(value);
        this.numberColor = "#999";
        this.fontSize = "bold " + FONT_VALUE + "px sans-serif"
    }

    get value() {
        return this._value;
    }

    /**
     * @param {number} newValue
     */
    set value(newValue) {
        this._value = newValue;
        this.adjustWidth(newValue);
    }

    adjustWidth(newValue) {
        this.width = FONT_VALUE / 2 + 5 + this.borderWidth * 2;
        if (newValue >= 100) {
            this.width = 3 * FONT_VALUE / 2 + 5 + this.borderWidth * 2;
        } else if (newValue >= 10) {
            this.width = 2 * FONT_VALUE / 2 + 5 + this.borderWidth * 2;
        }
    }
}

