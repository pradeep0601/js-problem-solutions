/**
 * O(n)
 * @param {*} arr 
 * @returns 
 */
const countUniqueValues1 = (arr) => {
    if (!arr.length) {
        return 0;
    }

    let uniqueCount = 1;
    for(let i = 0, j = 1; i < arr.length - 1; i++, j++) {
        if(arr[i] != arr[j]) {
            uniqueCount++;
        }
    }
    return uniqueCount;
}

/** 
 * without using an extra variable to store the count
 * O(n)
 * @param {*} arr 
 * @returns 
 */
const countUniqueValues = (arr) => {
    if (!arr.length) {
        return 0;
    }
    
    let i = 0;
    for(j = 1; j < arr.length; j++) {
        if(arr[i] != arr[j]) {
           i++;
          arr[i] = arr[j];
        }
        console.log(i, j)
    }
    return i + 1;
}

console.log("countUniqueValues([1, 1, 1, 1, 1, 2]) ===> ", countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log("countUniqueValues([1, 2, 3, 4, 4, 7, 7, 12, 12, 13]) ===> ", countUniqueValues([1, 2, 3, 4, 4, 7, 7, 12, 12, 13]));
console.log("countUniqueValues([-2, -1, -1, 0, 1]) ===> ", countUniqueValues([-2, -1, -1, 0, 1]));
console.log("countUniqueValues([]) ===> ", countUniqueValues([]));
