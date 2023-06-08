import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, getDoc, getDocs, query, doc, deleteDoc } from '@angular/fire/firestore';
import { User } from '../model/user';
import { updateDoc } from 'firebase/firestore';

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
    //return collectionData(query(this.userCollection));
    const result = await getDocs(query(this.userCollection))
    return result.docs.map(doc => ({ _id: doc.id, ...doc.data() }));

  }

  async getUserById(id: string) {
    const result = await getDoc(doc(this.firestore, 'users', id));
    //return result.data();

    return { _id: result.id, ...result.data() }
  }

  async update(user: User, _id: string) {
    const result = await updateDoc(doc(this.firestore, 'users', _id), {
      email: user.email,
      nome: user.nome,
      senha: user.senha,
      telefone: user.telefone,
    })

    return result;
  }

  async delete(id: string) {
    return await deleteDoc(doc(this.firestore, 'users', id))
  }

}