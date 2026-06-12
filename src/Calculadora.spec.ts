import { Calculadora } from './Calculadora';

describe("Classe Calculadora - Testes Parametrizados", () => {
    let calc: Calculadora; // A instância base da nossa Fixture

    beforeEach(() => {
        calc = new Calculadora(); // Configuração da Fixture a cada teste
    });

    // --- 2 - DATASET FIXTURES PARA PARAMETRIZAÇÃO ---
    // Estrutura: [valor1, valor2, resultadoEsperado]
    const somaFixtures = [
        [10, 2, 12],
        [-5, 5, 0],
        [0, 0, 0]
    ];

    const subtracaoFixtures = [
        [10, 2, 8],
        [5, 10, -5]
    ];

    const multiplicacaoFixtures = [
        [10, 2, 20],
        [5, 0, 0]
    ];

    const divisaoFixtures = [
        [10, 2, 5],
        [9, 3, 3]
    ];

    const potenciacaoFixtures = [
        [2, 3, 8],
        [5, 2, 25]
    ];

    // Estrutura raiz: [valor, resultadoEsperado]
    const radiciacaoFixtures = [
        [9, 3],
        [16, 4]
    ];

    // --- TESTES PARAMETRIZADOS (test.each) ---

    test.each(somaFixtures)('Somar %i e %i deve retornar %i', (a, b, expected) => {
        expect(calc.soma(a, b)).toBe(expected);
    });

    test.each(subtracaoFixtures)('Subtrair %i de %i deve retornar %i', (a, b, expected) => {
        expect(calc.subtracao(a, b)).toBe(expected);
    });

    test.each(multiplicacaoFixtures)('Multiplicar %i e %i deve retornar %i', (a, b, expected) => {
        expect(calc.multiplicacao(a, b)).toBe(expected);
    });

    test.each(divisaoFixtures)('Dividir %i por %i deve retornar %i', (a, b, expected) => {
        expect(calc.divisao(a, b)).toBe(expected);
    });

    test.each(potenciacaoFixtures)('Potência de base %i elevada a %i deve retornar %i', (base, exp, expected) => {
        expect(calc.potenciacao(base, exp)).toBe(expected);
    });

    test.each(radiciacaoFixtures)('Raiz quadrada de %i deve retornar %i', (n, expected) => {
        expect(calc.radiciacao(n)).toBe(expected);
    });

    // --- TESTES DE EXCEÇÃO ---

    // Exceção externa da divisão (mantida do exercício anterior)
    test('Divisão por zero (Exceção lançada)', () => {
        let errorMessage = '';
        try {
            calc.divisao(6, 0);
        } catch (error) {
            if (error instanceof Error) {
                errorMessage = error.message;
            }
        }
        expect(errorMessage).toBe("Não é possível dividir por zero");
    });

    // Exceções Tratadas Internamente (devem retornar NULL conforme o PDF)
    test("Radiciação de número negativo deve retornar null (tratamento interno)", () => {
        expect(calc.radiciacao(-4)).toBeNull();
    });

    test("Potenciação com base zero e expoente negativo/zero deve retornar null (tratamento interno)", () => {
        expect(calc.potenciacao(0, -1)).toBeNull();
    });
});