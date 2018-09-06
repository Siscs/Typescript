import Carro from './Carro';

export default class Pessoa {
    private Nome: string
    private CarroPreferido: string;
    private Carro: any;

    constructor(nome: string, carroPreferido: string) {
        this.Nome = nome;
        this.CarroPreferido = carroPreferido;
    }

    dizerNome(): string {
        return this.Nome;
    }

    dizerCarroPreferido(): string {

        return this.CarroPreferido;
    }

    dizerCarroQueTem(): Carro {
        return this.Carro;
    }

    comprarCarro(carro: Carro): void {
        this.Carro = carro;
    }
}
