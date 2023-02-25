package tinnova4;

import java.util.Scanner;

public class Tinnova4 {
    
    public static int somaMultiplos(int x) {
        int soma = 0;
        
        for (int i = 1; i < x; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                soma += i;
            }
        }
        
        return soma;
    }
    
    public static void main(String[] args) {
        
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.print("Digite o valor de x: ");
            int x = scanner.nextInt();
            
            int soma = somaMultiplos(x);
            
            System.out.println("A soma dos múltiplos de 3 ou 5 até " + x + " é: " + soma);
        }
    }
}
