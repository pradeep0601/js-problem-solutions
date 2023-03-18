/**
 * O(n2)
 * @param {*} arr 
 * @returns 
 */
const sumZero1 = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}



/**
 * O(n)
 * @param {*} arr 
 * @returns 
 */
const sumZero = (arr) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex < rightIndex) {
        const first = arr[leftIndex];
        const second = arr[rightIndex];
        const sum = first + second;

        if(sum === 0) {
            return [first, second];
        }

        if(sum > 0) {
            rightIndex -= 1;
        }
        else {
            leftIndex +=1;
        }
    }
}

console.log("sumZero([-3, -2, -1, 0, 1, 2, 3]) ===> ", sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log("sumZero([-2, 0, 1, 3]) ===> ", sumZero([-2, 0, 1, 3]));
console.log("sumZero([1, 2, 3])  ===> ", sumZero([1, 2, 3]));
console.log("sumZero([-4, -3, -2, -1, 0, 1, 2, 5]) ===> ", sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))