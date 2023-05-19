import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from '../budget.service';
import { ConfirmationService } from 'primeng/api';
import { Budget } from '../budget';
import { FicheprojetService } from 'src/app/ficheprojet/ficheprojet.service';
import { CalendrierService } from 'src/app/calendrier/calendrier.service';
import { Projet } from 'src/app/calendrier/projet';
import { DialogService } from 'primeng/dynamicdialog';
import { NotAllowedComponent } from 'src/app/composants/not-allowed/not-allowed.component';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent  implements OnInit {

  budgetList:any[] = [];
  projetList:any[]=[];
  display: boolean = false;
  projetId:number=-1;
  detailsProjet!:any;

  direction = localStorage.getItem("role") ==="Direction d'achat divers"|| 
  localStorage.getItem("role") ==="Direction d'achat de travaux et batiment"||
  localStorage.getItem("role") ==="direction d'achat informatique"

  admin = localStorage.getItem("role") ==="ADMINISTRATEUR"

  ordonnateur = localStorage.getItem("role") ==="Ordonnateur"
  planification = localStorage.getItem("role") ==="direction de planification et budget"

  constructor(private dialogService: DialogService, private route:Router, private budgetService:BudgetService, private confirmationService:ConfirmationService,
    private ficheprojet:FicheprojetService,private calendrierService:CalendrierService){}

    ngOnInit():void{
      this.getProjet();  
      if(localStorage.getItem("role")=== "direction de planification et budget"){
        this.refresh();
      }else{
        this.dialogService.open(NotAllowedComponent,{
          header: "Access Denied",
          height: "20rem",
          width: "30rem"
        })
      }
    }


    refresh(){
      this.budgetService.getAllBudget().subscribe(
        (res: any[])=>{
          console.log(res);
          
          this.budgetList=res;

        },
        (erreur)=>
        console.log(erreur)
      )

    }
    ajoutBudget(){
      if(localStorage.getItem("role")=== "direction de planification et budget"){
        this.route.navigate(['/budget/create-budget/' + this.projetId])
      }else{
        this.dialogService.open(NotAllowedComponent,{
          header: "Access Denied",
          height: "20rem",
          width: "30rem"
        })
      }
     }





     deleteBudget(budget:Budget){
      
      if(localStorage.getItem("role")=== "direction de planification et budget"){
        this.confirmationService.confirm({
          message: 'Êtes-vous sûr de vouloir continuer ?',
          accept: () => {
            this.budgetService.deleteBudget(budget.id).subscribe(data=>{
              this.refresh();
            })
              //Actual logic to perform a confirmation
          }
      });       }else{
        this.dialogService.open(NotAllowedComponent,{
          header: "Access Denied",
          height: "20rem",
          width: "30rem"
        })
      }
      
       
     }


     updateBudget(id:number){
      if(localStorage.getItem("role")=== "direction de planification et budget"){
        this.route.navigate(['/budget/update-budget',id])
      }else{
        this.dialogService.open(NotAllowedComponent,{
          header: "Access Denied",
          height: "20rem",
          width: "30rem"
        })
      }
     }



     

    showDialog() {
        this.display = true;
    }

    getProjet(){
      this.calendrierService.getAllProjet().subscribe(data=>{
        this.projetList=data;
        console.log(data);
        
      });
    }



    detailsBudget(id:number){
      if(localStorage.getItem("role")=== "direction de planification et budget"){
        this.route.navigate(['/budget/details',id])
      }else{
        this.dialogService.open(NotAllowedComponent,{
          header: "Access Denied",
          height: "20rem",
          width: "30rem"
        })
      }
     }

     }


     


    
