import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, getDoc, query, getDocs, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  private userCollection = collection(this.firestore, 'users');

  add(user: User) {
    return addDoc(this.userCollection, <User>{
      nome: user.nome,
      email: user.email,
      telefone: user.telefone,
      senha: user.senha
    })
  }

  async list() {
    //return collectionData(query(this.userCollection));
    const result = await getDocs(query(this.userCollection));
    return result.docs.map(doc => ({ _id: doc.id, ...doc.data() }));
  }

  async get(id: string) {
    const result = await getDoc(doc(this.firestore, 'users', id))
    //return result.data() 
    return { _id: result.id, ...result.data() }
  }

  async update(user: User, id: string) {
    const result = await updateDoc(doc(this.firestore, 'users', id),
      {
        nome: user.nome,
        email: user.email,
        telefone: user.telefone,
        senha: user.senha
      });
    return result;
  }

  async delete(id: string) {
    return await deleteDoc(doc(this.firestore, 'users', id));
  }

}
