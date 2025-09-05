 
function maxsubarrayoflenK (nums, k) { 
    let sum = 0
    let current_sum = 0
    let n = nums.length
    let set = new Set()

    for(let i=0; i<k; i++) { 
        sum += nums[i]
    }

    // for(let i=1; i<n; i++) { 
    //     if(nums[i] != nums[i+1]) { 
    //         current_sum += nums[i+1] - nums[n - k - 1]
    //         sum = Math.max(sum, current_sum)
    //     }
    // }
    return sum

}

const nums = [1,5,4,2,9,9,9]
let k=3
console.log(maxsubarrayoflenK(nums, k))