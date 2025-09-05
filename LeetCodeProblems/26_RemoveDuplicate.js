
// my function should return k=first unique elements of the array 

var removeDuplicate = function(nums){ 

    let i=0
    for(let j=1; j<nums.length; j++) { 
        if( nums[j] !=  nums[i]) { 
             nums[i+1] = nums[j]; 
             i++
        }
    }
    return nums
}

const nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicate(nums))