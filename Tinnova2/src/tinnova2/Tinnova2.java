package tinnova2;

public class Tinnova2 {

    public static void main(String[] args) {
        int[] v = {5, 3, 2, 4, 7, 1, 0, 6};
        bubbleSort(v);
        System.out.println("Vetor ordenado:");
        for (int i = 0; i < v.length; i++) {
            System.out.print(v[i] + " ");
        }
    }
    
    public static void bubbleSort(int[] v) {
        int n = v.length;
        boolean troca;
        do {
            troca = false;
            for (int i = 0; i < n - 1; i++) {
                if (v[i] > v[i+1]) {
                    int temp = v[i];
                    v[i] = v[i+1];
                    v[i+1] = temp;
                    troca = true;
                }
            }
            n--;
        } while (troca);
    }
}
