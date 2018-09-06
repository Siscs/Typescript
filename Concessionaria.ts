import Carro from './carro'

export default class Concessionaria {

    private Nome: string;
    private ListaDeCarros: Carro[];

    constructor(nome: string, listaDeCarros: Carro[]) {
        this.Nome = nome;
        this.ListaDeCarros = listaDeCarros;
    }

    mostrarListaDeCarros(): Carro[] {
        return this.ListaDeCarros;
    }

}