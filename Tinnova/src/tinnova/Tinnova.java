package tinnova;

public class Tinnova {

    public static void main(String[] args) {
        
        // Exercício 1
        CalculaPercentual cp = new CalculaPercentual(1000, 800, 150, 50);
        System.out.println("Percentual de b em relação a a: " + cp.percentualB() + "%");
        System.out.println("Percentual de c em relação a a: " + cp.percentualC() + "%");
        System.out.println("Percentual de d em relação a a: " + cp.percentualD() + "%");
    }
}
