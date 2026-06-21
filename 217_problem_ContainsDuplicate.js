

const nums = [1,2,3,1]

function checkElement(nums) { 
    const hashNums = new Set()
    for( let i=0; i<nums.length; i++) { 
        if(hashNums.has(nums[i])) { 
            return true
        }
        hashNums.add(nums[i])
    }
    return false
}

console.log(checkElement(nums))