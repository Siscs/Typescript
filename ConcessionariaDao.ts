import { DaoInterface } from './DaoInterface'
import Concessionaria from './Concessionaria'

export default class ConcessionariaDao implements DaoInterface {
 
    nomeTabela: string = 'Concessionaria';

    public inserir(object: Concessionaria): boolean {
     // inserir
     console.log('inserindo...');
     return true;   
    }

    public atualizar(object: Concessionaria): boolean {
        // atualizar
        console.log('atualizando...');
        return true;
    }

    public remover(id: number): Concessionaria {
        console.log('removendo...');
        return new Concessionaria('', []);;
    }

    public selecionar(id: number): Concessionaria {
        return new Concessionaria('', []);
    }

    public selecionarTodos(): [Concessionaria] {

        //let lista:any = [];

        return [new Concessionaria('', [])];
    }

}