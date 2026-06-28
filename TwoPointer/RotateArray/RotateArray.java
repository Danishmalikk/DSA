

public class RotateArray {
    public static void main(String[] args) {
        int[] nums = {1,2,3,4,5,6,7}; 
        int k =3;

        int[] result = RotateArray.rotate(nums, k); 
        System.out.println(result[0] + result[1] + result[2]); 
    }

    static int[] rotate(int[] nums, int k) {
        int n = nums.length; 
        for(int i=0; i<k-1; i++) { 
            int temp = nums[i+1]; 
            nums[i+1] = nums[i]; 
            nums[i] = nums[n-1]; 
        }
        return nums; 
    }
}
