package br.com.example.tdd;

public class Calculadora {

    public int somar(int a, int b) {
        return operacao((x, y) -> x + y, a, b);
    }

    public int subtrair(int a, int b) {
        return operacao((x, y) -> x - y, a, b);
    }

    public int multiplicar(int a, int b) {
        return operacao((x, y) -> x * y, a, b);
    }

    public int dividir(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("Não é possível dividir por zero");
        }
        return operacao((x, y) -> x / y, a, b);
    }

    private int operacao(OperacaoMatematica operacao, int a, int b) {
        return operacao.executar(a, b);
    }

    private interface OperacaoMatematica {
        int executar(int a, int b);
    }
}