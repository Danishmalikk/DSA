# DSA Mistake Notebook - LeetCode 15: 3Sum

## Problem: 3Sum (Find all unique triplets that sum to 0)

### Key Insights

1. **Sorting is Essential** - Sort the array first to enable two-pointer technique and easily skip duplicates
2. **Two-Pointer Approach** - Fix one element, use two pointers (left and right) to find pairs that sum to target
3. **Duplicate Handling** - Skip duplicate values at all three pointer positions to avoid duplicate triplets in result
4. **Optimization Strategy** - Reduces brute force O(n³) to O(n²) by sorting + two pointers

### Mistakes Made

1. **Forgot to Sort Array** - Attempted to use two-pointer technique on unsorted array, leading to incorrect results
2. **Improper Duplicate Skipping** - Didn't skip duplicates properly, resulted in duplicate triplets in final answer
3. **Pointer Movement Issues** - Didn't correctly move pointers when sum equals zero (need to skip duplicates BEFORE moving)
4. **Return Type Confusion** - Initially unsure about returning `List<List<Integer>>` vs `List<int[]>`
5. **Index Out of Bounds** - Forgot boundary checks while moving pointers

### Pattern Learned

1. **Two-Pointer Technique** - Sort array + use two pointers from opposite ends to find pairs efficiently
2. **Time Complexity: O(n²)** - Sorting is O(n log n), two-pointer loop is O(n²)
3. **Space Complexity: O(1)** - Only using pointers (excluding output array)
4. **When to Use** - Use two-pointer on sorted arrays for pair/triplet finding problems
5. **Duplicate Skipping Pattern**:
   ```java
   // Skip duplicates for first pointer
   while (i < nums.length - 1 && nums[i] == nums[i + 1]) i++;
   
   // Skip duplicates for left/right pointers
   while (left < right && nums[left] == nums[left + 1]) left++;
   while (left < right && nums[right] == nums[right - 1]) right--;
   ```

### Code Template for Reference

```java
public List<List<Integer>> threeSum(int[] nums) {
    Arrays.sort(nums);  // Sort first
    List<List<Integer>> result = new ArrayList<>();
    
    for (int i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;  // Early exit if positive
        if (i > 0 && nums[i] == nums[i - 1]) continue;  // Skip duplicates
        
        int left = i + 1, right = nums.length - 1;
        int target = -nums[i];
        
        while (left < right) {
            int sum = nums[left] + nums[right];
            if (sum == target) {
                result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                while (left < right && nums[left] == nums[left + 1]) left++;
                while (left < right && nums[right] == nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}
```

---

**Date Completed:** 2026-06-22
