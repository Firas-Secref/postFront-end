export class Role{
    id: number;
    roleName: string;

    constructor(id: number, roleName: string){
        this.id = id;
        this.roleName = roleName
    }
}

export const roles= [
    {
        roleName: "ADMINISTRATEUR", 
        roleObject: {id: 4, roleName: "ADMINISTRATEUR"}
    },
    {
        roleName: "Direction d'achat divers", 
        roleObject: {id: 1, roleName: "Direction d'achat divers"}
    },
    {
        roleName: "direction d'achat informatique", 
        roleObject: {id: 2, roleName: "direction d'achat informatique"}
    },
    {
        roleName: "direction de planification et budget", 
        roleObject: {id: 5, roleName: "direction de planification et budget"}
    },
    {
        roleName: "Direction d'achat de travaux et batiment", 
        roleObject: {id: 3, roleName: "Direction d'achat de travaux et batiment"}
    },
    {
        roleName: "Ordonnateur", 
        roleObject: {id: 6, roleName: "Ordonnateur"}
    }
]

