package tinnova;

public class CalculaPercentual {
    private final int a;
    private final int b;
    private final int c;
    private final int d;
    
    public CalculaPercentual(int a, int b, int c, int d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    
    public double percentualB() {
        return ((double) b / a) * 100.0;
    }
    
    public double percentualC() {
        return ((double) c / a) * 100.0;
    }
    
    public double percentualD() {
        return ((double) d / a) * 100.0;
    }
}
