package br.com.example.retangulo;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class RetanguloTest {
    @Test
    public void calcularAreaCorretamente() {
        Retangulo retangulo = new Retangulo(10, 5);
        int areaCalculada = retangulo.calcularArea();
        System.out.println("A área do retângulo é: " + areaCalculada);
        assertEquals(50, areaCalculada);
    }

    @Test
    public void calcularAreaZero() {
        Retangulo retangulo = new Retangulo(0, 10);
        int areaCalculada = retangulo.calcularArea();
        System.out.println("A área do retângulo é: " + areaCalculada);
        assertEquals(0, areaCalculada);
    }

    @Test
    public void calcularAreaDoPerimetro() {
        Retangulo retangulo = new Retangulo(7, 3);
        int perimetroCalculado = retangulo.calcularPerimetro();
        System.out.println("O perimetro é: " + perimetroCalculado);
        assertEquals(20, perimetroCalculado);
    }
}
