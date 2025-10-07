package br.com.example.retangulo;

public class Quadrado {
    private int lado;

    public Quadrado(int lado){
        if (lado < 0) {
            throw new IllegalArgumentException("O lado de um quadrado não pode ser negativo");
        }
        this.lado = lado;
    }

    public int getLado() {
        return lado;
    }

    public int calcularArea(){
        return lado * lado;
    }
    
    public int calcularPerimetro(){
        return 4 * lado;
    }
    
}
