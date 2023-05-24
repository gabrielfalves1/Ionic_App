import { v4 as uuidv4 } from 'uuid';
export class Produto {

    _id: String = uuidv4();
    nome: string = "";
    categoria: string = "";
    descricao: string = "";
    quant: Number = 0;
    valor: Number = 0;
    ativo: boolean = true;

}
