public class Try {
    private int i;
    Try(int i) {
        i = i;
    }
    public int getInt() {return i;}
    public static void main(String args[]) {
        Try t = new Try(42);
        System.out.println("" + t.getInt());
    }
}