
import { Calculadora } from './Calculadora';
describe("Classe Calculadora", () => {
    let calc: Calculadora;
    beforeEach(() => {
        calc = new Calculadora();
    });
    test("Deve somar dois números corretamente", () => {
        expect(calc.soma(10, 2)).toBe(12);
    });
    test("Deve subtrair dois números corretamente", () => {
        expect(calc.subtracao(10, 2)).toBe(8);
    });
    test("Deve multiplicar dois números corretamente", () => {
        expect(calc.multiplicacao(10, 2)).toBe(20);
    });
    test("Deve dividir dois números corretamente", () => {
        expect(calc.divisao(10, 2)).toBe(5);
    });
    test('Divisão por zero', () => {
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
});