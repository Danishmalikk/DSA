
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        Arrays.sort(nums);  
        int n = nums.length;
        List<List<Integer>> result = new ArrayList<>(); 
        
        for(int i=0; i<n; i++) { 
            if(i>0 && nums[i] == nums[i-1]) continue; 
            for(int j=i+1; j<n; j++ ) { 
                if(j!= i+1 && nums[j] == nums[j-1]) continue; 
                int k = j+1; 
                int l = n-1; 
                while(k<l) { 
                    long sum = nums[i]; 
                    sum += nums[j];
                    sum += nums[k];
                    sum += nums[l]; 
                    if( target == sum) { 
                        result.add(Arrays.asList(nums[i], nums[j], nums[k], nums[l])); 
                        k++; 
                        l--; 
                        while(k<l && nums[k] == nums[k-1]) k++; 
                        while(k<l && nums[l] == nums[l+1]) l--; 
                    }
                    else if( sum < target ) k++; 
                    else l--; 
                }
            }
        }
        return result;         
    }
}

public class FourSum{
    public static void main(String[] args) { 
      Solution result =  new Solution();
    }
}