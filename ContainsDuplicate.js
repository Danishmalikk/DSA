//Problem Statement
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

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