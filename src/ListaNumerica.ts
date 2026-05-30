
export class ListaNumerica {
    private numeros: number[] = [];

    public setNumeros(valores: number[]): void {
        this.numeros = valores;
    }

    public getNumeros(): number[] {
        return this.numeros;
    }

    public isQuantidadeValida(): boolean {
        const qtd = this.numeros.length;
        return qtd >= 1 && qtd <= 5; 
    }

    public isValoresValidos(): boolean {
        if (this.numeros.length === 0) return false;
        
        return this.numeros.every(num => num >= 0 && num <= 10);
    }
    
    public isListaTotalmenteValida(): boolean {
        return this.isQuantidadeValida() && this.isValoresValidos();
    }
}