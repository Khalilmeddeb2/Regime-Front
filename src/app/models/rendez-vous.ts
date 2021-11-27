import { User } from "./user";

export class RendezVous {

    date!: Date;
    note!: string; 
    valid! : Boolean ;
    // zedthom ena les attribus hedhoum

    nomPatient! :String ;
    emailPatient! :String ;
    medecin!:User;
}
