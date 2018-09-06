import { DaoInterfaceGenerics } from './DaoInterfaceGenerics';

export default class DaoRepository<Tentity> implements DaoInterfaceGenerics<Tentity> {

    nomeTabela: string = '';

    public inserir(object: Tentity): boolean {
    // inserir
    console.log('inserindo obj...');
    console.log(typeof object);


    return true;   
    }

    public atualizar(object: Tentity): boolean {
        // atualizar
        console.log('atualizando obj...');
        return true;
    }

    public remover(id: number): Tentity {
        console.log('removendo obj...');
        return Object();
    }

    public selecionar(id: number): Tentity {
        return Object();
    }

    public selecionarTodos(): [Tentity] {

        //let lista:any = [];

        return [Object()];
    }
}
