import { DaoInterface } from './DaoInterface';
import Carro  from './Carro';

export default class CarroDao implements DaoInterface {

    nomeTabela: string = 'carro';

    public inserir(object: Carro): boolean { 
        console.log('Inserindo carro......');
        return true;
    }

    public atualizar(object: Carro): boolean  { 
        console.log('atualizando carro......');
        return true;
    }

    public remover(id: number): any  { 
        console.log('Removendo carro......');
        return id;
    }

    public selecionar(id: number): Carro  { 
        console.log('selecionando carro......')
        return new Carro('one', 'verde', 2);
    }

    public selecionarTodos(): [Carro]  { 
        console.log('todos carros......');
        return [new Carro('one', 'verde', 2)];

    }

}
