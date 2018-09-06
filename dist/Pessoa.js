"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.Nome = nome;
        this.CarroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.Nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.CarroPreferido;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.Carro;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.Carro = carro;
    };
    return Pessoa;
}());
exports.default = Pessoa;
