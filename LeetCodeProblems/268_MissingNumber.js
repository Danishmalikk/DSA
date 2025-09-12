

const nums = [0,3,2]

const findMissingNumber = (nums) => { 
    
    let allXor =0; 

    for(let i=0; i<=nums.length ; i++) { 
        allXor = allXor ^ i;
    }

    for(let num of nums) { 
        allXor = allXor ^ num
    }
    return allXor
}

console.log(findMissingNumber(nums))