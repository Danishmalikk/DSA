// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return the indices of the two numbers such that they add up to the target, where index1 must be less than index2.

// we can do with while loop, left and right pointer by checking three condition
// what if the array is not sorted, in this situation we can go with hashmap utility
// * 
function twoSum (arr, target) { 

    const numMap = new Map()
    
    for(let i=0; i<arr.length; i++) { 
        const compliment = target - arr[i]
        if(numMap.has(compliment)) { 
            return [numMap.get(compliment), i ]
        }
        numMap.set(arr[i], i)
    }

}
const numbers = [2, 7, 11, 15, 9]
const target = 20
console.log(twoSum(numbers, target))

// i = 0 ; compliment = 20 - 2 = 18 , map => 2 : 0
// i = 1; compliment = 20 - 7 = 13, map => 2: 0, 7 : 1 , 
//i =2 ; compliment = 20-11 = 9, 9 ? hasMap = No, map => 2:0, 7:1, 11:2 
//i =3 ; compliment = 20-15 = 5, map => 2:0, 7:1, 9:2, 5: 3 
//i = 4; compliment = 20 - 9 = 11, 11 ? hasMap = Yes , return 2, 4 map => 2:0, 7:1, 9:2, 5:3 , 11 : 4