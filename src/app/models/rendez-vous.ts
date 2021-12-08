import { User } from "./user";

export class RendezVous {

    date!: Date;
    note!: string; 
    valid! : Boolean ;
    patient!:User;
    medecin!:User;
}
