export default class Veiculo {
    
    private modelo: string
    private cor: string
    protected velocidade: number = 0

    constructor(pModelo: string, pCor: string) {
        this.modelo = pModelo
        this.cor = pCor
    }

    public Cor(): string {
        return this.cor
    }

    public Modelo(): string {
        return this.modelo
    }

    public Acelerar(): void {
        this.velocidade += 10;
    }

    public Parar(): void {
        this.velocidade = 0;
    }

    public VelocidadeAtual(): number {
        return this.velocidade;
    }
}