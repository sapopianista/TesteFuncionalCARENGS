export class Calculadora {
    public soma(n1: number, n2: number): number {
        return n1 + n2;
    }
    public subtracao(n1: number, n2: number): number {
        return n1 - n2;
    }
    public multiplicacao(n1: number, n2: number): number {
        return n1 * n2;
    }
    public divisao(n1: number, n2: number): number {
        if (n2 === 0) {
            throw new Error("Não é possível dividir por zero");
        }
        return n1 / n2;
    }
}