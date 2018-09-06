"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DaoRepository = /** @class */ (function () {
    function DaoRepository() {
        this.nomeTabela = '';
    }
    DaoRepository.prototype.inserir = function (object) {
        // inserir
        console.log('inserindo obj...');
        console.log(typeof object);
        return true;
    };
    DaoRepository.prototype.atualizar = function (object) {
        // atualizar
        console.log('atualizando obj...');
        return true;
    };
    DaoRepository.prototype.remover = function (id) {
        console.log('removendo obj...');
        return Object();
    };
    DaoRepository.prototype.selecionar = function (id) {
        return Object();
    };
    DaoRepository.prototype.selecionarTodos = function () {
        //let lista:any = [];
        return [Object()];
    };
    return DaoRepository;
}());
exports.default = DaoRepository;
