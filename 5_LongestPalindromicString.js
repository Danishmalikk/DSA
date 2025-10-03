
// function isPalindrome(s) { 

//     let validPalindrome = ''
//     let lengthOfString = 0
//     for(let i=1; i<s.length-1; i++) { 
//         let left = i -1 
//         let right = i + 1 
//         console.log("aopsjfoaspd0", s[left], s[right])
//         if(s[left] == s[right]) { 
//             validPalindrome = s[left] + s[i] + s[right]
//             lengthOfString = validPalindrome.length
//         }
//         if(validPalindrome.length > lengthOfString) { 
//             lengthOfString = validPalindrome.length
//         }
        

//     }
//     return validPalindrome; 
// }

// const s = 'babad'
// const result = isPalindrome(s)
// console.log(result)




// O(n^3) time, O(1) extra space (ignoring output)
function bruteForceLongestPalindrome(s) {
  const n = s.length;
  if (n === 0) return "";

  function isPalindrome(l, r) {
    while (l < r) {
      if (s[l] !== s[r]) return false;
      l++;
      r--;
    }
    return true;
  }

  let best = "";
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
    console.log("i", i)
    console.log("j---->", j)
      if (j - i + 1 > best.length && isPalindrome(i, j)) {
        best = s.slice(i, j + 1);
      }
    }
  }
  return best;
}

const s = 'babad'
console.log(bruteForceLongestPalindrome(s))


function longestPalindromicSubstring(str) {
  if (!str || str.length <= 1) return str;

  let left = 0,
    right = 0;

  for (let i = 0; i < str.length; i++) {
    // Odd length palindrome
    let [left1, right1] = expandAroundCenter(str, i, i);
    // Even length palindrome
    let [left2, right2] = expandAroundCenter(str, i, i + 1);

    if (right1 - left1 > right - left) {
      left = left1;
      right = right1;
    }
    if (right2 - left2 > right - left) {
      left = left2;
      right = right2;
    }
  }
  return str.substring(left, right + 1);
}

function expandAroundCenter(str, left, right) {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }
  return [left + 1, right - 1];
}
