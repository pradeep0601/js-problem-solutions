/**
 * O(n)
 * @param {*} input1 
 * @param {*} input2 
 * @returns 
 */
const validAnagram = (input1, input2) => {
    if(input1.length !== input2.length) {
        return false;
    }
    
    if(input1 === input2) {
        return true;
    }
    
    const lookup = {};
    
    for(const char of input1) {
        lookup[char] = (lookup[char] || 0) + 1;
    }
    
    for(const char of input2) {
        if(!lookup[char]) {
            return false;
        }
        lookup[char] -= 1;
    }
    
    return true;
  }

  console.log("validAnagram('', '') ==> ", validAnagram('', ''));
  console.log("validAnagram('aaz', 'zza') ==> ", validAnagram('aaz', 'zza'));
  console.log("validAnagram('anagram', 'nagaram') ==> ", validAnagram('anagram', 'nagaram'));
  console.log("validAnagram('awesome', 'awesom') ==> ", validAnagram('awesome', 'awesom'));
  console.log("validAnagram('iceman', 'cinema') ==> ", validAnagram('iceman', 'cinema'));