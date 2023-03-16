/**
 * O(n2)
 * @param {*} inputArr 
 * @param {*} sqrInputArr 
 */
const same1 = (inputArr, sqrInputArr) => {
    if (inputArr.length !== sqrInputArr.length) {
        return false;
    }

    for(const input of inputArr) { // O(n)
        const index = sqrInputArr.indexOf(input * input); // O(n)
        if(index === -1) {
            return false;
        }
        // remove from sqr array
        sqrInputArr.splice(index, 1);
    }
    return true;
}

/**
 * O(n)
 * @param {*} inputArr 
 * @param {*} sqrInputArr 
 * @returns 
 */
const same = (inputArr, sqrInputArr) => {

    const inputFrequencies = {}
    for(const input of inputArr) {
        const sqrInput = input*input;
        inputFrequencies[sqrInput] = inputFrequencies[sqrInput] && ++inputFrequencies[sqrInput] || 1;
    }
    
    console.log(inputFrequencies);

    const sqrInputFrequencies = {}
    for(const sqrInput of sqrInputArr) {
        sqrInputFrequencies[sqrInput] = sqrInputFrequencies[sqrInput] && ++sqrInputFrequencies[sqrInput] || 1;
    }
    console.log(sqrInputFrequencies);

    // check frequency

    for(const key of Object.keys(inputFrequencies)) {
        if(inputFrequencies[key] !== sqrInputFrequencies[key]){
            return false;
        }
    }
    return true;
}

console.log('====same O(n2) =====')
console.log(same1([1, 2, 3], [4, 1, 9]));
console.log(same1([1, 2, 3], [1,9]));
console.log('====same O(n2) ===ends==')
console.log('====same O(n) =====')
console.log(same([1, 2, 3], [4, 1, 9]));
console.log("===================");
console.log(same([1, 2, 3], [1,9]));
console.log("===================");
console.log(same([1, 2, 1], [4, 4, 1]));
console.log("===================");
console.log(same([3, 7, 2, 5, 1], [1, 25, 9, 49, 4]));
console.log('====same O(n) ===ends==')