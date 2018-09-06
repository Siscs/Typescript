"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var CarroDao = /** @class */ (function () {
    function CarroDao() {
        this.nomeTabela = 'carro';
    }
    CarroDao.prototype.inserir = function (object) {
        console.log('Inserindo carro......');
        return true;
    };
    CarroDao.prototype.atualizar = function (object) {
        console.log('atualizando carro......');
        return true;
    };
    CarroDao.prototype.remover = function (id) {
        console.log('Removendo carro......');
        return id;
    };
    CarroDao.prototype.selecionar = function (id) {
        console.log('selecionando carro......');
        return new Carro_1.default('one', 'verde', 2);
    };
    CarroDao.prototype.selecionarTodos = function () {
        console.log('todos carros......');
        return [new Carro_1.default('one', 'verde', 2)];
    };
    return CarroDao;
}());
exports.default = CarroDao;
