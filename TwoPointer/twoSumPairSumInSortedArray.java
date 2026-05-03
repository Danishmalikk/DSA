

class twoSumPairSumInSortedArray {

    public static void main(String args[]) { 
        int[] numbers = {2,7,11,15}; 
        int target = 17 ;
        int[] result = printArray(numbers, target);
        if (result != null) {
            System.out.println("Indices: " + result[0] + ", " + result[1]);
        } else {
            System.out.println("No pair found");
        }
    }
// this approach is without the two pointer which has time complexity 0(n2) because two nested loops are running
    public static int[] printArray(int[] numbers, int target) { 

        for(int i=0; i<numbers.length; i++) { 
            // System.out.println(numbers[i]);
            for(int j=numbers.length-1; j>i; j--) { 
                // System.out.println("j is : "+ numbers[j]);
                if(numbers[i]+numbers[j] == target) { 
                    return new int[]{i, j};
                }
            }
        }
        return null;
    
    }
}