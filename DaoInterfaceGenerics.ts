interface DaoInterfaceGenerics<Tentity> {

    nomeTabela: string;

    inserir(object: Tentity): boolean;
    atualizar(object: Tentity): boolean;
    remover(id: number): any;
    selecionar(id: number): Tentity
    selecionarTodos(): [Tentity];

}

export { DaoInterfaceGenerics };