

function CheckAnagram(str1, str2) { 

    // if(str1.length != str2.length ) return false

    // const strMap = new Map()

    // for(let ch of str1) { 
    //     strMap.set(ch, (strMap.get(ch) || 0) + 1)
    // }

    // for(let ch of str2) { 
    //     if(strMap.has(ch)) { 
    //         strMap.set(ch, strMap.get(ch) -1 )
    //         if(strMap.get(ch)===0) strMap.delete(ch)
    //     } else { 
    //         return false; 
    //     }   
    // }
    // return strMap.size ===0 

    const checkStr1 = [...str1].sort().join('')
    const checkStr2 = [...str2].sort().join('')

    console.log(checkStr1)
    console.log(checkStr2)

    return 1; 

}
const str1 = 'anagram'
const str2 = 'margana'
const result = CheckAnagram(str1, str2)
console.log(result)