import { v4 as uuidv4 } from 'uuid';
export class Produto {

    _id: string = uuidv4();
    nome: string = "";
    categoria: string = "";
    descricao: string = "";
    quant: number | undefined;
    valor: number | undefined;
    foto: string = "";
    ativo: boolean = true;

}
