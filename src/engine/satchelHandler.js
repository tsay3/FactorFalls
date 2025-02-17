

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
            // awardPointsForNumber(2);
        } else if (factor == 3) {
            threesCount++;
            // awardPointsForNumber(3);
        } else if (factor == 5) {
            fivesCount++;
            // awardPointsForNumber(5);
        } else if (factor == 7) {
            sevensCount++;
            // awardPointsForNumber(7);
        } else {
            let firstEmptyPosition = -1;
            for (let j = 0; j < uncommonFactors.length; j++) {
                let uncommon = uncommonFactors[j];
                if (uncommon.value == factor && uncommonCount[j] > 0) {    
                    uncommonCount[j]++;
                    if (uncommonCount[j] >= FACTORS_PER_SET) {
                        uncommonFactors[j].value = 0;
                        uncommonCount[j] = 0;
                        // awardPointsForNumber(factor);
                    }
                    break;
                } else if (uncommon.value == 0 && firstEmptyPosition == -1) {
                    firstEmptyPosition = j;
                }
            }
            if (firstEmptyPosition != -1) {
                uncommonFactors[firstEmptyPosition].value = factor;
                uncommonCount[firstEmptyPosition] = 1;
            } else {
                // We might set a flag here to ensure that at most one life is lost per number.
                // lives--;
            }
        }
    }
    clearNumberArea();
    drawAddedNumber(num);
    drawFactors(factors);
    updateSatchel();
}