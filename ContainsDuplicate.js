

function checkDuplicate(arr) { 
    const arrSet = new Set()
    for(let num of arr) { 
        if(arrSet.has(num)){ 
            return true
        }
        arrSet.add(num)
    }
    return false
}       
const nums = [1, 2, 3, 4, 5, 0.1]

const result = checkDuplicate(nums)
console.log(result)