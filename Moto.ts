import Veiculo from './Veiculo';

export default class Moto extends Veiculo {

    private cilindrada: number = 150;

    constructor(modelo: string, cor: string) {
        super(modelo, cor);
    }

    public Acelerar(): void {
        this.velocidade += 30;
    }

    public Cilindrada(): number {
        return this.cilindrada;
    }
}
