import { NatureProjet } from "./nature-projet";
import { Region } from "./region";

export class Projet {
    id!:number;
    directionachat!:number;
    typeachat!:number;
    natureprojet!:number;
    region!:number;
    sujet!:string;
    ordonnateur!:string;
    numCompte!:number;
    coutInitial!:number;
    coutMisAjour!:number;
    responsable!:string;
    dateAgrementSpecifications!:Date;
    dateNegociation!:Date
    dateOuvertureSoumission!:Date
    dateTransmissionComite!:Date
    dateReponseCommite!:Date
    selected!: boolean
}

// export interface Projet {
//     id:number;
//     directionachat:number;
//     typeachat:number;
//     natureprojet:number;
//     region:number;



//     sujet:string;
//     ordonnateur:string;
//     numCompte:number;
//     coutInitial:number;
//     coutMisAjour:number;
//     responsable:string;
//     dateAgrementSpecifications:Date;
//     dateNegociation:Date
//     dateOuvertureSoumission:Date
//     dateTransmissionComite:Date
//     dateReponseCommite:Date
//     selected: boolean
// }
