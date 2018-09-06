"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(nome, listaDeCarros) {
        this.Nome = nome;
        this.ListaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.ListaDeCarros;
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
