
import { ListaNumerica } from './ListaNumerica';

describe("Testes da Classe ListaNumerica - Análise de Valor Limite", () => {
    let lista: ListaNumerica;

    beforeEach(() => {
        lista = new ListaNumerica();
    });
    test("Inválido: Abaixo da quantidade mínima (0 elementos)", () => {
        lista.setNumeros([]);
        expect(lista.isQuantidadeValida()).toBe(false);
    });

    test("Válido: Limite inferior de quantidade (1 elemento)", () => {
        lista.setNumeros([5]);
        expect(lista.isQuantidadeValida()).toBe(true);
    });

    test("Válido: Limite superior de quantidade (5 elementos)", () => {
        lista.setNumeros([1, 2, 3, 4, 5]);
        expect(lista.isQuantidadeValida()).toBe(true);
    });

    test("Inválido: Acima da quantidade máxima (6 elementos)", () => {
        lista.setNumeros([1, 2, 3, 4, 5, 6]);
        expect(lista.isQuantidadeValida()).toBe(false);
    });

    test("Inválido: Valor abaixo do limite (-1)", () => {
        lista.setNumeros([-1, 5]);
        expect(lista.isValoresValidos()).toBe(false);
    });

    test("Válido: Valor no limite inferior (0)", () => {
        lista.setNumeros([0, 5]);
        expect(lista.isValoresValidos()).toBe(true);
    });

    test("Válido: Valor no limite superior (10)", () => {
        lista.setNumeros([5, 10]);
        expect(lista.isValoresValidos()).toBe(true);
    });

    test("Inválido: Valor acima do limite (11)", () => {
        lista.setNumeros([5, 11]);
        expect(lista.isValoresValidos()).toBe(false);
    });

    test("Válido: Lista atende quantidade e valores (Deve retornar true)", () => {
        lista.setNumeros([2, 5, 8]); 
        expect(lista.isListaTotalmenteValida()).toBe(true);
    });

    test("Inválido: Quantidade certa, mas valor errado (Deve retornar false)", () => {
        lista.setNumeros([2, 5, 11]); 
        expect(lista.isListaTotalmenteValida()).toBe(false);
    });

    test("Inválido: Valor certo, mas quantidade errada (Deve retornar false)", () => {
        lista.setNumeros([1, 2, 3, 4, 5, 6]); 
        expect(lista.isListaTotalmenteValida()).toBe(false);
    });

    test("Deve retornar os números usando o método get", () => {
        lista.setNumeros([1, 2, 3]);
        expect(lista.getNumeros()).toEqual([1, 2, 3]);
    });

    test("Inválido: Validar valores com lista vazia deve retornar false", () => {
        lista.setNumeros([]);
        expect(lista.isValoresValidos()).toBe(false);
    });
});