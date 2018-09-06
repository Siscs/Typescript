"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = __importDefault(require("./Pessoa"));
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = 'Pessoa';
    }
    PessoaDao.prototype.inserir = function (object) {
        // inserir
        console.log('inserindo Pessoa...');
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        // atualizar
        console.log('atualizando Pessoa...');
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log('removendo Pessoa...');
        return new Pessoa_1.default('', 'carro preferido');
        ;
    };
    PessoaDao.prototype.selecionar = function (id) {
        return new Pessoa_1.default('', 'carro preferido');
    };
    PessoaDao.prototype.selecionarTodos = function () {
        //let lista:any = [];
        return [new Pessoa_1.default('', 'preferred car')];
    };
    return PessoaDao;
}());
exports.default = PessoaDao;
