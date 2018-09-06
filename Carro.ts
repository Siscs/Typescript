import Veiculo from './Veiculo';

export default class Carro extends Veiculo {
    
    private portas: number

    constructor(modelo: string, cor: string, portas: number) {
        super(modelo, cor);
        this.portas = portas
    }

    public Portas(): number {
        return this.portas
    }
}