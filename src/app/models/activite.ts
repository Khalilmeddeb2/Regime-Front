import { Exercice } from "./exercice";
import { User } from "./user";

export class Activite {

    description !:string  ;
    coach!: User;
    patient !: User;
    exercices !:Exercice
    

    
}
