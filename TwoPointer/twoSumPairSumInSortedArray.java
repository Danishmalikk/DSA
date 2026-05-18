

class twoSumPairSumInSortedArray {

    public static void main(String args[]) { 
        int[] numbers = {2,7,11,15}; 
        int target = 18 ;
        int[] result = calculatePairIndexes(numbers, target);
        if (result != null) {
            System.out.println("Indices: " + result[0] + ", " + result[1]);
        } else {
            System.out.println("No pair found");
        }
    }

    // now lets use the two pointer technique just to improve the time complexity 

    public static int[] calculatePairIndexes(int[] arr, int target) { 
        int n = arr.length-1; 
        int left = 0; 
        int right = n; 

        while(left<right) { 
            if( arr[left] + arr[right] > target ) { 
                right--; 
            } else if ( arr[left] + arr[right] < target) { 
                left++;
            } else { 
                return new int[] {left+1, right+1};
            }
        }
        return null;
   
    }


    // this approach is with the two nested loop which has time complexity 0(n2) because two nested loops are running
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