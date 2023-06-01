import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, getDoc, getDocs, query } from '@angular/fire/firestore';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private firestore: Firestore = inject(Firestore);
  private userCollection = collection(this.firestore, 'users');

  add(user: User) {
    return addDoc(this.userCollection, <User>{
      email: user.email,
      nome: user.nome,
      senha: user.senha,
      telefone: user.telefone
    })
  }

  async list() {
    return collectionData(query(this.userCollection));
    //const result = await getDocs(query(this.userCollection));



  }

}
