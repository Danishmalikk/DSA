
const romanSymbol = { 
    I : 1, 
    V : 5,
    X : 10, 
    L : 50, 
    C: 100, 
    D: 500, 
    M: 1000
}

const romanHashTable = new Map(); 
Object.keys(romanSymbol).forEach(key => { 
    romanHashTable.set(key, romanSymbol[key])
})

const convertRomanToInteger = (str) => {    
    let count = 0; 
    for(let i=0; i<str.length; i++) { 
        let current = romanHashTable.get(str[i]);
        if(i<str.length-1 && current < romanHashTable.get(str[i+1])) { 
            count -= current; 
        }
        else { 
            count += current; 
        }
    }
    return count
}
const str = 'MCMXCIV'
console.log(convertRomanToInteger(str))
