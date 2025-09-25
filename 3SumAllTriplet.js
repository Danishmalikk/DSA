

function ThreeSum(arr) { 
    
    const newArr = arr.sort((a,b)=>a-b)
    
    for(let i=0; i<newArr.length-2 ; i++) { 
        let left = i + 1; right = newArr.length-1 
        
    }
}


const arr = [-1,0,1,2,-1,-4]
const result = ThreeSum(arr)
console.log(result)