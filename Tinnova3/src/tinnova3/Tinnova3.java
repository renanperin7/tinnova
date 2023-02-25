package tinnova3;

import java.util.Scanner;

public class Tinnova3 {
    public static void main(String[] args) {
        int numero, fatorial = 1;
        try (Scanner entrada = new Scanner(System.in)) {
            System.out.print("Digite um número inteiro para calcular o fatorial: ");
            numero = entrada.nextInt();
            
            // Calculando o fatorial
            for (int i = 2; i <= numero; i++) {
                fatorial *= i;
            }
            
            System.out.printf("O fatorial de %d é: %d", numero, fatorial);
        }
    }
}

