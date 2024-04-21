/*public class bil{
    static class solution{
        public boolean isAnagram(String s , String t){
            if(s.length() != t.length()) return false;
            int [] alphbt = new int[26];
            for (int i=0 ; i<s.length();i++){
                alphbt[s.charAt(i) - 'a'] ++ ;
                alphbt[t.charAt(i)- 'a'] -- ;
            }
            for(int n:alphbt){
                if(n!= 0){
                    return false ;
                }
            }
            return true ;
        }
    }
    
        public static void main(String[] args) {
            solution bil = new solution();
    
            String s1 = "anagram";
            String t1 = "ranamga";
    
            String s2 = "rat";
            String t2 = "car";
    
            boolean result1 = bil.isAnagram(s1, t1);
            boolean result2 = bil.isAnagram(s2, t2);
    
            System.out.println("Is 'anagram' an anagram of 'nagaram'? " + result1);
            System.out.println("Is 'rat' an anagram of 'car'? " + result2);
        }
    }
    */
public class bil{
    static class solution{
        public boolean isAnagram(String s, String t){
            if(s.length()!= t.length()) return false;
            int[] alphabet = new int[26];
            for (int i =0 ; i<s.length(); i++){
                alphabet[s.charAt(i) - 'a'] ++;
                alphabet[t.charAt(i) - 'a']--;

            }
            for(int n : alphabet){
                if(n != 0){
                    return false;
                }
            }
            return true;
        }

    }
    public static void main(String[] args){
        System.out.println(args.length);
        for(String arg : args)
        {
            System.out.println(arg);
        }
    }

   /*  public static void main(String[] args){
         solution bil = new solution();
    
            String s1 = "anagram";
            String t1 = "ranamga";
    
            String s2 = "rat";
            String t2 = "car";
    
            boolean result1 = bil.isAnagram(s1, t1);
            boolean result2 = bil.isAnagram(s2, t2);
    
            System.out.println("Is 'anagram' an anagram of 'nagaram'? " + result1);
            System.out.println("Is 'rat' an anagram of 'car'? " + result2);
        
    }
    */
}

