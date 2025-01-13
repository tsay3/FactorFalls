class Factor extends Box {
    constructor(value) {
        super(value);
        this.borderWidth = TILE_BORDER - 1;
        this.innerColor = "#CCC";
        this.borderColor = "#977";
        let fontValue = TILE_WIDTH * 2 / 3;
        this.height = TILE_HEIGHT * 2 / 3;
        this.width = fontValue + this.borderWidth * 2;
        if (value >= 100) {
            this.width = 3 * fontValue + this.borderWidth * 2;
        } else if (value >= 10) {
            this.width = 2 * fontValue + this.borderWidth * 2;
        }
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
        let fontValue = TILE_WIDTH * 2 / 3;
        this.width = fontValue + this.borderWidth * 2;
        if (newValue >= 100) {
            this.width = 3 * fontValue + this.borderWidth * 2;
        } else if (newValue >= 10) {
            this.width = 2 * fontValue + this.borderWidth * 2;
        }
    }
}

