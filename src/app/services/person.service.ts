import { Injectable } from '@angular/core';
import { IPerson } from '../models/person.model';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private firestore: Firestore) { }


  addPerson(person: IPerson) {
    const personRef = collection(this.firestore, 'person'); 
    return addDoc(personRef, person);
  }

  getPerson(): Observable<IPerson[]> {
    const personRef = collection(this.firestore, 'person');
    return collectionData(personRef, { idField: 'id' }) as Observable<IPerson[]>;
  }

  deletePerson(person: IPerson) {
    const personDocRef = doc(this.firestore, `person/${person.id}`);
    return deleteDoc(personDocRef);
  }

  getPersonByID(id: string) { 
    const personRef = doc(this.firestore, `person/${id}`);
    return docData(personRef, { idField: 'id' }) as Observable<IPerson>;
  }
  
  updatePerson(person: IPerson) {
    const personDocRef = doc(this.firestore, `person/${person.id}`);
    return setDoc(personDocRef, person);
  }
  
  modifyPersonImage(person: IPerson, path: string) {
    const personDocRef = doc(this.firestore, `person/${person.id}`);
    return updateDoc(personDocRef, { path: path });
  }
}
