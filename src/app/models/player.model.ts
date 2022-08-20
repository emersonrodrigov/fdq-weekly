import { CollectionReference } from "firebase/firestore";

export interface IBook {
    id?: string;
    name : string;
    posicao1 : string;
    posicao2 : string;
    churrasco? : number;
    avulso : number;
    cancelado: Boolean;
}

export interface PlayerStat{
    goals: number;
    assists: number;
    date: Date;
    person: CollectionReference;

    // pegar do reference depois
    name: string;
}

export interface Payment{
    value:Number;
    month: String;
    date: Date;
}

export interface Player{
    id?:string;
    name: string;
    mainPosition: number;
    secundaryPosition: number;
    stars: number;
    photo: string;
    birthDate: Date;

    payment?:Payment[];
    stat?: PlayerStat[];
}


export interface ConfirmationPlayer{

    id?:string;
    id_player?:string;
    isBarbecue:number;
    isCancel:boolean;
    single:boolean; //avulson
    single_name: string;



}

export enum TYPE_LIST {
    CONFIRMED,
    ABSENT 
  }


  export class PhoneNumber {
    country: string;
    area: string;
    prefix: string;
    line: string;
  
    // format phone numbers as E.164
    get e164() {
      const num = this.country + this.area + this.prefix + this.line
      return `+${num}`
    }
  
  }