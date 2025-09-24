

function longestSubStringWithoutRepeatingChar(str) { 

    let left = 0;
        right = 0;
        maxlength=0;

    const charSet = new Set()

    while(right < str.length) { 
        while(charSet.has[str[right]]) { 
            charSet.delete(str[left])
            left ++; 
        }
        charSet.add(str[right]); 
        right ++; 
        maxlength = Math.max(maxlength, charSet.size)

    }
    return maxlength; 

}

const str = 'abcabcbbaa'
const result = longestSubStringWithoutRepeatingChar(str)

console.log(result)