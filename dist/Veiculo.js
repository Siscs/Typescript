"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo = /** @class */ (function () {
    function Veiculo(pModelo, pCor) {
        this.velocidade = 0;
        this.modelo = pModelo;
        this.cor = pCor;
    }
    Veiculo.prototype.Cor = function () {
        return this.cor;
    };
    Veiculo.prototype.Modelo = function () {
        return this.modelo;
    };
    Veiculo.prototype.Acelerar = function () {
        this.velocidade += 10;
    };
    Veiculo.prototype.Parar = function () {
        this.velocidade = 0;
    };
    Veiculo.prototype.VelocidadeAtual = function () {
        return this.velocidade;
    };
    return Veiculo;
}());
exports.default = Veiculo;
