import ConcessionariaDao from './ConcessionariaDao';
import Concessionaria from './Concessionaria';

import PessoaDao from './PessoaDao';
import Pessoa from './Pessoa';

import CarroDao from './CarroDao';
import Carro from './Carro';
import DaoRepository from './DaoRepository';

console.log('Concessionaria DAO........');
let concessionariaDao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria: Concessionaria = new Concessionaria('x', []);

console.log(concessionariaDao.inserir(concessionaria));

console.log('Pessoa DAO........');
let pessoaDao: PessoaDao = new PessoaDao()
let pessoa: Pessoa = new Pessoa('jula', 'car x');

console.log(pessoaDao.inserir(pessoa));

console.log('Carro DAO........');
let carroDao: CarroDao = new CarroDao()
let carro: Carro = new Carro('honda hr-v','prata', 4);

console.log(carroDao.inserir(carro));

let daoRepository1 = new DaoRepository<Carro>();
let daoRepository2 = new DaoRepository<Pessoa>();

daoRepository1.inserir(carro);
daoRepository2.inserir(pessoa);