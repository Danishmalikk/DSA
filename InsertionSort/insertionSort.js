
let nums = [5,2,9,1,5,6]; 

for (let i=1; i< nums.length; i++) { 
    let key = nums[i]
    let j = i-1
    console.log("check variable in iterations", i, j ) 
    while( j >= 0  && nums[j] > key) { 
        console.log("nums of j", nums[j]) 
        console.log("value of key", key) 
        nums[j+1] = nums[j]; 
        j--; 
    }
    nums[j+1] = key; 
}

console.log(" after calculation ", nums)