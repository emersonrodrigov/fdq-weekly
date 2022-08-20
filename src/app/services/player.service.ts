import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData, orderBy,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc, query
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IBook,TYPE_LIST } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  COLLECTION_NEW: string = "confirmation-list";
  // COLLECTION:string = "books";

  constructor(private firestore: Firestore) { }


  identifyList(tipo: TYPE_LIST){
      if(tipo === TYPE_LIST.CONFIRMED){
        return  this.COLLECTION_NEW + '/' + this.currentDateList() + '/' +  'confirmed';
      }else{
        return  this.COLLECTION_NEW + '/' + this.currentDateList() + '/' +  'absent';
      }
  }

  addBook(book: IBook, tipo: TYPE_LIST) {
    // book.cancelado = false;
    const booksRef = collection(this.firestore,  this.identifyList(tipo)
     );
    return addDoc(booksRef, book);
  }

  getBooks( tipo: TYPE_LIST): Observable<IBook[]> {
    const booksRef = collection(this.firestore, 
      this.identifyList(tipo));
      const q = query(booksRef)
      // const q = query(booksRef, orderBy("posicao1", "asc"), orderBy("name", "asc"))

 
    return collectionData(q,
      {
        idField: 'id'
      }
    ) as Observable<IBook[]>;
  }

  deleteBook(book: IBook,tipo: TYPE_LIST) {
    const bookDocRef = doc(this.firestore, this.identifyList(tipo) + `/${book.id}`);
    return deleteDoc(bookDocRef);
  }

  getBookByID(id: string,tipo: TYPE_LIST) {
    const bookRef = doc(this.firestore, this.identifyList(tipo) + `/${id}`);
    return docData(bookRef, { idField: 'id' }) as Observable<IBook>;
  }

  updateBook(book: IBook,tipo: TYPE_LIST) {
    const bookDocRef = doc(this.firestore, this.identifyList(tipo) + `/${book.id}`);
    return setDoc(bookDocRef, book);
  }

  modifyBookPrice(book: IBook, amount: number,tipo: TYPE_LIST) {
    const bookDocRef = doc(this.firestore, this.identifyList(tipo) + `/${book.id}`);
    return updateDoc(bookDocRef, { price: amount });
  }

  cancelar(book: IBook,tipo: TYPE_LIST,) {
    const bookDocRef = doc(this.firestore, this.identifyList(tipo)+ `/${book.id}`);
    return updateDoc(bookDocRef, { cancelado: true });
  }

  refazerCancelamento(book: IBook,tipo: TYPE_LIST) {
    const bookDocRef = doc(this.firestore, this.identifyList(tipo) + `/${book.id}`);
    return updateDoc(bookDocRef, { cancelado: false });
  }

  private currentDateList(): string {

    const nextMonday = new Date()

    if(nextMonday.getDay()==4){
      var dateObj = nextMonday;
      var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
      var date = ('0' + dateObj.getDate()).slice(-2);
      var year = dateObj.getFullYear();
      var shortDate = year + '-' + month + '-' + date;
      return shortDate;
    }

    // pegar proxima quinta
    do {
      nextMonday.setDate(nextMonday.getDate() + 1) // Adding 1 day
    } while (nextMonday.getDay() !== 4)

    var dateObj = nextMonday;
    var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    var date = ('0' + dateObj.getDate()).slice(-2);
    var year = dateObj.getFullYear();
    var shortDate = year + '-' + month + '-' + date;
    // document.getElementById("data_firesotrre1").innerHTML = shortDate

    return shortDate;

  }
}
