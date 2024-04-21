public class first {

    public static class Voiture {
        private int vitesseMax;

        public int deQuelVitesse() {
            return vitesseMax;
        }

    }

    public static void main(String[] args) {
        System.out.println("bilal is my name");
        int a = 10;
        System.out.println(a);
        

        Voiture mavoiture = new Voiture();
        mavoiture.vitesseMax = 100;
        System.out.println(mavoiture.deQuelVitesse());
        System.out.println(mavoiture.getClass());
        System.out.println(mavoiture instanceof Voiture);
        String bil = "hello sir ";
        System.out.println(bil);
        int tab[] = new int[10];
        tab[5]++;
        for(int i =0 ;i<10; i++){
          System.out.println(tab[i]);
        }

    }
}
