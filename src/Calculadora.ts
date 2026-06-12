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

    // 1 - Radiciação (Raiz Quadrada) com tratamento interno
    public radiciacao(numero: number): number | null {
        try {
            if (numero < 0) {
                // Não existe raiz real de número negativo
                throw new Error("Número negativo"); 
            }
            return Math.sqrt(numero);
        } catch (error) {
            return null; // Tratamento feito dentro da classe
        }
    }

    // 1 - Potenciação com tratamento interno
    public potenciacao(base: number, expoente: number): number | null {
        try {
            if (base === 0 && expoente <= 0) {
                // Indeterminação matemática matemática (ex: 0 elevado a 0 ou negativo)
                throw new Error("Indeterminação matemática");
            }
            return Math.pow(base, expoente);
        } catch (error) {
            return null; // Tratamento feito dentro da classe
        }
    }
}