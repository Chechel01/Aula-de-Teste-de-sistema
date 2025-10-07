package br.com.example.retangulo;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.junit.jupiter.api.Test;

public class QuadradoTest {

    @Test
    public void calcularAreaCorretamente() {
        Quadrado quadrado = new Quadrado(5);
        int areaCalculada = quadrado.calcularArea();
        System.out.println("A área do quadrado é: " + areaCalculada);
        assertEquals(25, areaCalculada);
    }

    @Test
    public void calcularAreaComLadoZero() {
        Quadrado quadrado = new Quadrado(0);
        int areaCalculada = quadrado.calcularArea();
        System.out.println("A área do quadrado com lado zero é: " + areaCalculada);
        assertEquals(0, areaCalculada);
    }

    @Test
    public void calcularPerimetroCorretamente() {
        Quadrado quadrado = new Quadrado(8);
        int perimetroCalculado = quadrado.calcularPerimetro();
        System.out.println("O perímetro do quadrado é: " + perimetroCalculado);
        assertEquals(32, perimetroCalculado);
    }

    @Test
    public void excecaoParaLadoNegativo() {
        assertThrows(IllegalArgumentException.class, () -> {
            new Quadrado(-10);
        });
    }
}