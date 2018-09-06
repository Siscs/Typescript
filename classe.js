class Carro {

    constructor(pModelo, pCor, pPortas) {
        this.modelo = pModelo
        this.cor = pCor
        this.portas = pPortas

    }

    AcrescentarPortas() {
        this.portas+=1
    }

    Cor() {
        return this.cor
    }

    Modelo() {
        return this.modelo
    }

    Portas() {
        return this.portas
    }


}

let carro1 = new Carro('vw Polo', 'cinza', 4)
let carro2 = new Carro('vw Fusca', 'azul', 2)

console.log(carro1)
console.log(carro2)
