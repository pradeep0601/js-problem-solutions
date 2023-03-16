/**
 * O(n)
 * @param {*} input1 
 * @param {*} input2 
 * @returns 
 */
function validAnagram(input1, input2){
    if(input1.length !== input2.length) {
        return false;
    }
    
    if(input1 === input2) {
        return true;
    }
    
    const firstFreqCounter = {};
    
    for(const char of input1) {
        firstFreqCounter[char] = (firstFreqCounter[char] || 0) + 1;
    }
    const secondFreqCounter = {};
    
    for(const char of input2) {
        secondFreqCounter[char] = (secondFreqCounter[char] || 0) + 1;
    }
    
    for(const key of Object.keys(firstFreqCounter)) {
        if(firstFreqCounter[key] !== secondFreqCounter[key]) {
            return false;
        }
    }
    return true;
  }

  console.log("validAnagram('', '') ==> ", validAnagram('', ''));
  console.log("validAnagram('aaz', 'zza') ==> ", validAnagram('aaz', 'zza'));
  console.log("validAnagram('anagram', 'nagaram') ==> ", validAnagram('anagram', 'nagaram'));
  console.log("validAnagram('awesome', 'awesom') ==> ", validAnagram('awesome', 'awesom'));