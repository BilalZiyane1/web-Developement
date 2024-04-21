public class exemp {
  public static class etudiant{
    public static  int age = 10;
    private String name ;
    private int sbn;
    public String getname(){
      return name;
    }

  }
  public static void main(String[] args){
    String bil = "hello";
    String nn = "hello";
    int i ;
    i = bil.lastIndexOf('o');
    String ne= bil.replace('o', 'z');
    System.out.println();
    System.out.println(ne);
    etudiant et = new etudiant();
    et.name="bilal";

    String mo = et.getname();
    System.out.println(bil.compareTo("bilal"));
    //System.out.println(et.age);
  }
}
