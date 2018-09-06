import { DaoInterface } from './DaoInterface'
import Pessoa from './Pessoa'

export default class PessoaDao implements DaoInterface {
 
    nomeTabela: string = 'Pessoa';

    public inserir(object: Pessoa): boolean {
     // inserir
     console.log('inserindo Pessoa...');
     return true;   
    }

    public atualizar(object: Pessoa): boolean {
        // atualizar
        console.log('atualizando Pessoa...');
        return true;
    }

    public remover(id: number): Pessoa {
        console.log('removendo Pessoa...');
        return new Pessoa('','carro preferido');;
    }

    public selecionar(id: number): Pessoa {
        return new Pessoa('', 'carro preferido');
    }

    public selecionarTodos(): [Pessoa] {

        //let lista:any = [];

        return [new Pessoa('', 'preferred car')];
    }

}