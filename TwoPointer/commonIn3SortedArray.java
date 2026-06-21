
class commonIn3SortedArray { 


    public static void main(String[] args) { 
        int[] arr1 = { 5,7,10,15,20 } ; 
        int[] arr2 = { 1,5, 6, 9, 20}; 
        int[] arr3 = { 0, 1, 2, 3, 4, 5, 20, 25};  
    
        int[] result = commonFinder(arr1, arr2, arr3);
        System.out.println("result is " + result);
        if(result != null) { 
            System.out.println("Common elements found" + result[0] + result[1]); 
        } else { 
            System.out.println("No elements are common"); 
        }
    }


    public static int[] commonFinder(int[] arr1, int[] arr2, int[] arr3) { 
        // this approach considered and solve the problem using three pointers 
        // if the value of target is 
        return new int[] { 1, 2}; 
    }

    
    // private static int[] commonFinder(int[] arr1, int[] arr2, int[] arr3) { 
    //     HashMap<Integer, Integer> count = new HashMap<Integer, Integer>();
        
    //     for(int i=0; i<arr1.length; i++ ) { 
    //         if(count.containsKey(arr1[i])) { 
    //             count.put(arr1[i], count.get(arr1[i]) +1);
    //         } else { 
    //             count.put(arr1[i], 1);
    //         }
    //     }
        
    //     for(int i=0; i<arr2.length; i++ ) { 
    //         if(count.containsKey(arr2[i])) { 
    //             count.put(arr2[i], count.get(arr2[i]) +1);
    //         } else { 
    //             count.put(arr2[i], 1);
    //         }
    //     }


    //     for(int i=0; i<arr3.length; i++ ) { 
    //         if(count.containsKey(arr3[i])) { 
    //             count.put(arr3[i], count.get(arr3[i]) +1);
    //         } else { 
    //             count.put(arr3[i], 1);
    //         }
    //     }
    //     System.out.println("Current Hash Map" + count); 
    //     // if(count.get()
    //     return  null; 
    // }

}