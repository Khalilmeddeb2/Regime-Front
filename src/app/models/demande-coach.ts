import { User } from "./user";

export class DemandeCoach {

    date!: Date;
    note!: string; 
    patient !: User;
    medecin!:User;
    coach!: User;
}
