import Carro from './Carro';
import Concessionaria from './Concessionaria';
import Pessoa from './Pessoa';
import Moto from './Moto';

// Cria lista de carros
let listaCarros: Carro[] = [];

listaCarros.push(new Carro('vw Polo', 'cinza', 4));
listaCarros.push(new Carro('vw Fusca', 'azul', 2));
listaCarros.push(new Carro('camaro', 'amarelo', 2));
listaCarros.push(new Carro('gm Corsa', 'cinza', 2));
listaCarros.push(new Carro('ford focus', 'cinza', 4));


// cria a concessionaria
let concessionaria = new Concessionaria('ryan cars', listaCarros);

// compra carro
let pessoa = new Pessoa('ryan', 'camaro');

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    //console.log(carro);
    //if (carro['modelo'] == pessoa.dizerCarroPreferido()) {
    if (carro.Modelo() == pessoa.dizerCarroPreferido()) {
        pessoa.comprarCarro(carro);
    }

});

console.log('Carro que tem: ');
console.log(pessoa.dizerCarroQueTem());


let moto = new Moto('yamaha fazer', 'azul')

moto.Acelerar();

console.log(moto);
console.log(moto.VelocidadeAtual())
