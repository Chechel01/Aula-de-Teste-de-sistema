package br.com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.Test;

public class CalculadoraTest {
    @Test 
    public void SomaNumeros(){
     Calculadora calculadora = new Calculadora();
     int soma = calculadora. soma(2, 0);
     System.out.println("A soma é: " + soma);
     assertEquals(2, soma);
    }

    @Test 
    public void SubtracaoNumeros(){
     Calculadora calculadora = new Calculadora();
     int subtracao = calculadora. subtracao(10, 5);
     System.out.println("A subtração é: " + subtracao);
     assertEquals(5, subtracao);
    }

    @Test 
    public void DivisaoNumeros(){
     Calculadora calculadora = new Calculadora();
     int divisao = calculadora. divisao(5, 5);
     System.out.println("A divisão é: " + divisao);
     assertEquals(1, divisao);
    }

    @Test 
    public void MultiplicacaoNumeros(){
     Calculadora calculadora = new Calculadora();
     int multiplicacao = calculadora. multiplicacao(5, 5);
     System.out.println("A multiplicação é: " + multiplicacao);
     assertEquals(25, multiplicacao);
    }
}
