import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { Player, PlayerStat } from '../models/player.model';
import {
  Firestore, addDoc, collection, collectionData,orderBy,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc, query
} from '@angular/fire/firestore';  
import { where } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private firestore: Firestore) { }

  COLLECTION:string = "players";
  COLLECTION_STATS:string = "stats";
  getPlayers(): Observable<Player[]> {
    const playersRef = collection(this.firestore,this.COLLECTION);
    const q = query(playersRef )
    //orderBy("posicao1", "asc"), orderBy("name", "asc")
     

    return collectionData(q,  
      { idField: 'id'   
    } 
     ) as Observable<Player[]>;
  }

  getStatsGoals(): Observable<PlayerStat[]> {
    const playersStatRef = collection(this.firestore,this.COLLECTION_STATS);
    const q = query(playersStatRef,
      where('goals', '>' , 0) ,
      orderBy('goals', 'desc') ,
      orderBy('name', 'asc') 
    
     ) 
     

    return collectionData(q,  
      { idField: 'id'   
    } 
     ) as Observable<PlayerStat[]>;
  }

  getStatsAssits(): Observable<PlayerStat[]> {
    const playersStatRef = collection(this.firestore,this.COLLECTION_STATS);
    const q = query(playersStatRef, 
      where('assists', '>' , 0),
      orderBy('assists', 'desc'),
      orderBy('name', 'asc') 
      
     )  
     

    return collectionData(q,  
      { idField: 'id'   
    } 
     ) as Observable<PlayerStat[]>;
  }
}
