
var MajorityElement = function(nums) { 

    let count=0;
    let whichNum;  
    for(let i=0; i<nums.length; i++) { 
        for(let j=1; j<nums.length; j++) { 
            if(i===j) { 
                count =+1 
                whichNum=nums[j]
            }
        }
    }

}

nums = [1,1,2,2,2,1,2]