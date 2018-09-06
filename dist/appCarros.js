"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Moto_1 = __importDefault(require("./Moto"));
// Cria lista de carros
var listaCarros = [];
listaCarros.push(new Carro_1.default('vw Polo', 'cinza', 4));
listaCarros.push(new Carro_1.default('vw Fusca', 'azul', 2));
listaCarros.push(new Carro_1.default('camaro', 'amarelo', 2));
listaCarros.push(new Carro_1.default('gm Corsa', 'cinza', 2));
listaCarros.push(new Carro_1.default('ford focus', 'cinza', 4));
// cria a concessionaria
var concessionaria = new Concessionaria_1.default('ryan cars', listaCarros);
// compra carro
var pessoa = new Pessoa_1.default('ryan', 'camaro');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    //console.log(carro);
    //if (carro['modelo'] == pessoa.dizerCarroPreferido()) {
    if (carro.Modelo() == pessoa.dizerCarroPreferido()) {
        pessoa.comprarCarro(carro);
    }
});
console.log('Carro que tem: ');
console.log(pessoa.dizerCarroQueTem());
var moto = new Moto_1.default('yamaha fazer', 'azul');
moto.Acelerar();
console.log(moto);
console.log(moto.VelocidadeAtual());
