import { User } from "./user";

export class RendezVous {


    _id : number;
    date!: Date;
    note : string ;
    valid : Boolean ;
    patient! : User;
    medecin! : User;
}
