

/**
 * Adds a number to the satchel.
 * @param {number} num
 */
function addNumberToSatchel(num) {
    let factors = getPrimesOfNumber(num);
    for (let i = 0; i < factors.length; i++) {
        let factor = factors[i];
        console.log(factor);
        if (factor == 2) {
            twosCount++;
        } else if (factor == 3) {
            threesCount++;
        } else if (factor == 5) {
            fivesCount++;
        } else if (factor == 7) {
            sevensCount++;
        } else {
            // for (let j = 0; j < uncommonFactors.length; j++) {
            //     let uncommon = uncommonFactors[j];
            //     if (uncommon.value == factor && uncommonCount[j] > 0) {
                    
            //     }
            // }
        }
    }
    clearNumberArea();
    drawAddedNumber(num);
    drawFactors(factors);
    updateSatchel();
}