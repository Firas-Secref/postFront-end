export class ProjetEnCours {
    id!:number;
    id_projet!:number;
    
    couleur!:string;
    dateDebutProjet!:Date;
    dateAchevemetProjet!:Date;
    status:string;

    constructor(){
        this.status="enCours";
    }
}
