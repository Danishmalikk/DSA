


public class CandiesDistribution { 

    private static int[] assignCandies(int candies, int num_people) { 
        // Initialize result array to store candies for each person
        int[] result = new int[num_people];
      
        // Distribution loop: i represents the current candy amount to give (1-indexed)
        for (int i = 0; candies > 0; i++) {
            // Calculate which person receives candies (using modulo for circular distribution)
            int personIndex = i % num_people;
          
            // Calculate how many candies to give in this round
            // Either (i + 1) candies or remaining candies, whichever is smaller
            int candiesToGive = Math.min(candies, i + 1);
          
            // Give candies to the current person
            result[personIndex] += candiesToGive;
          
            // Update remaining candies
            candies -= candiesToGive;
        }
      
        return result;

    }
    public static void main(String[] args) {
        int candies = 10; 
        int noOfPeople = 4; 


        int[] expecArray = assignCandies(candies, noOfPeople); 

        for(int result : expecArray) { 
            System.out.println("After assignment of candies to peeps " + result); 
        }

    }
}