
// var reverseWords = function(s) { 
//     let left = 0
//     let right = s.length -1 

//     let temp=""; 
//     let ans="";

//     while(left<=right) { 
//         let ch = s[left]
//         if(ch != " ") { 
//             temp +=ch; 
//         } else if(ch == ' ') { 
//             if(ans !="") { 
//                 ans=temp+" "+ ans;
//             }
//             else ans = temp
//             temp="";
//         }
//         // console.log(temp)
//         left++
//     }

//     if(temp!="") { 
//         if(ans!="") ans = temp + " " + ans; 
//         else ans = temp; 
//     }
//     return ans
// }

// const s = "  hello world  "
// // reverseWords(s)
// console.log(reverseWords(s))

setTimeout(() => console.log('timeout'), 1000);
setImmediate(() => console.log('immediate'));
process.nextTick(() => console.log('nextTick'));