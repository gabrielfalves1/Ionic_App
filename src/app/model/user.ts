import { v4 as uuidv4 } from 'uuid';

export class User {

    _id: string = uuidv4();
    nome: string = "";
    email: string = "";
    senha: string = "";
    telefone: string = "";

}


