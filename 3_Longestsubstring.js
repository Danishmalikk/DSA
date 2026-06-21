class Solution {
    lengthOfLongestSubstring(s) {
        const mpp = new Array(256).fill(-1); // Array of 256 initialized with -1
        let left = 0;
        let right = 0;
        const n = s.length;
        let length = 0;

        while (right < n) {
            const charCode = s.charCodeAt(right); // Get ASCII code
            console.log("charCode ", charCode, s[right] )
            console.log(mpp[charCode])
            if (mpp[charCode] !== -1) {
                left = Math.max(mpp[charCode] + 1, left);
            }

            mpp[charCode] = right;

            length = Math.max(length, right - left + 1);
            right++;
        }

        return length;
    }
}

// Example usage
const str = "takeUforward";
const obj = new Solution();
console.log("The length of the longest substring without repeating characters is",
    obj.lengthOfLongestSubstring(str));
