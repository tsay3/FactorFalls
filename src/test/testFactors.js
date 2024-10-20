function baseCaseTesting() {
    let testArray = getPrimesOfNumber(0); 
    console.assert(testArray.length == 0, "getPrimesOfNumber(0) should return empty array, instead returns " + testArray.toString());
    testArray = getPrimesOfNumber(1);
    console.assert(testArray.length == 0, "getPrimesOfNumber(1) should return empty array, instead returns " + testArray.toString());
}

function primeTesting() {
    let testArray = getPrimesOfNumber(2); 
    console.assert(testArray.length == 1, "getPrimesOfNumber(2) should return array of length 1, instead returns " + testArray.toString());
    console.assert(testArray[0] == 2, "getPrimesOfNumber(2) should return 2, instead returns " + testArray.toString());
    testArray = getPrimesOfNumber(3);
    console.assert(testArray.length == 1, "getPrimesOfNumber(3) should return array of length 1, instead returns " + testArray.toString());
    testArray = getPrimesOfNumber(5);
    console.assert(testArray.length == 1, "getPrimesOfNumber(5) should return array of length 1, instead returns " + testArray.toString());
    testArray = getPrimesOfNumber(31);
    console.assert(testArray.length == 1, "getPrimesOfNumber(31) should return array of length 1, instead returns " + testArray.toString());
    testArray = getPrimesOfNumber(37);
    console.assert(testArray.length == 1, "getPrimesOfNumber(37) should return array of length 1, instead returns " + testArray.toString());
    testArray = getPrimesOfNumber(101);
    console.assert(testArray.length == 1, "getPrimesOfNumber(101) should return array of length 1, instead returns " + testArray.toString());
}

function compositeTesting() {
    let testArray = getPrimesOfNumber(4);
    let expectedArray = [2, 2];
    console.assert(testArray.length == 2, "getPrimesOfNumber(2) should return array of length 2");
    console.assert(testArray[0] == expectedArray[0], "getPrimesOfNumber(2)'s first element is" + testArray[0].toString());
    console.assert(testArray[1] == expectedArray[1], "getPrimesOfNumber(2)'s second element is" + testArray[1].toString());
    testArray = getPrimesOfNumber(12);
    expectedArray = [2, 2, 3];
    console.assert(testArray.length == 3, "getPrimesOfNumber(12) should return array of length 1, instead returns " + testArray.toString());
    console.assert(testArray[0] == expectedArray[0], "getPrimesOfNumber(12)'s first element is" + testArray[0].toString());
    console.assert(testArray[1] == expectedArray[1], "getPrimesOfNumber(12)'s second element is" + testArray[1].toString());
    console.assert(testArray[2] == expectedArray[2], "getPrimesOfNumber(12)'s third element is" + testArray[2].toString());
    testArray = getPrimesOfNumber(210);
    expectedArray = [2, 3, 5, 7]
    console.assert(testArray.length == 4, "getPrimesOfNumber(210) should return array of length 4, instead returns " + testArray.toString());
    console.assert(testArray[0] == expectedArray[0], "getPrimesOfNumber(210)'s first element is" + testArray[0].toString());
    console.assert(testArray[1] == expectedArray[1], "getPrimesOfNumber(210)'s second element is" + testArray[1].toString());
    console.assert(testArray[2] == expectedArray[2], "getPrimesOfNumber(210)'s third element is" + testArray[2].toString());
    console.assert(testArray[3] == expectedArray[3], "getPrimesOfNumber(210)'s fourth element is" + testArray[2].toString());
    testArray = getPrimesOfNumber(970);
    expectedArray = [2, 5, 97];
    console.assert(testArray.length == 3, "getPrimesOfNumber(970) should return array of length 1, instead returns " + testArray.toString());
    console.assert(testArray[0] == expectedArray[0], "getPrimesOfNumber(970)'s first element is" + testArray[0].toString());
    console.assert(testArray[1] == expectedArray[1], "getPrimesOfNumber(970)'s second element is" + testArray[1].toString());
    console.assert(testArray[2] == expectedArray[2], "getPrimesOfNumber(970)'s third element is" + testArray[2].toString());
}

baseCaseTesting();
primeTesting();
compositeTesting();