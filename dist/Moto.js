"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo_1 = __importDefault(require("./Veiculo"));
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(modelo, cor) {
        var _this = _super.call(this, modelo, cor) || this;
        _this.cilindrada = 150;
        return _this;
    }
    Moto.prototype.Acelerar = function () {
        this.velocidade += 30;
    };
    Moto.prototype.Cilindrada = function () {
        return this.cilindrada;
    };
    return Moto;
}(Veiculo_1.default));
exports.default = Moto;
