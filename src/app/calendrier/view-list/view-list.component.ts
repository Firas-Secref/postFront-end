import { Component, OnInit } from '@angular/core';
import { CalendrierService } from '../calendrier.service';
import { Projet } from '../projet';
import {ConfirmationService} from 'primeng/api';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { NotAllowedComponent } from 'src/app/composants/not-allowed/not-allowed.component';


@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {

  projetList:Projet[] = [];
  filterBy: string = ""

  direction = localStorage.getItem("role") ==="Direction d'achat divers"|| 
              localStorage.getItem("role") ==="Direction d'achat de travaux et batiment"||
              localStorage.getItem("role") ==="direction d'achat informatique"
  
  admin = localStorage.getItem("role") ==="ADMINISTRATEUR"

  ordonnateur = localStorage.getItem("role") ==="Ordonnateur"
  planification = localStorage.getItem("role") ==="direction de planification et budget"

  constructor(
    private route :Router,
    private calendrierService:CalendrierService,
    private confirmationService: ConfirmationService, private dialogService: DialogService ){}
  ngOnInit(): void {

    switch(localStorage.getItem("role")!){
      case "Direction d'achat divers": this.filterBy = "divers";  break;
      case "direction d'achat informatique": this.filterBy = "informatique"; break;
      case "Direction d'achat de travaux et batiment": this.filterBy = "batiment et travaux"; break
      default: this.filterBy = "all"; break;
    }
    this.refresh();

  }

  refresh() {
    this.calendrierService.getAllProjet().subscribe(data=>{
      // console.log(data);
      
      // this.projetList=data;


      if(this.filterBy ==="all"){
        this.projetList = data
      }else{
        data.forEach((obj: any)=>{
          if( obj.typeAchat === this.filterBy){
           this.projetList.push(obj)
          }
         })
         console.log(data);
      }
    });
  }

  

  

  

  deleteProject(projet: any) {
    if(localStorage.getItem("role") ==="Ordonnateur"){
      this.confirmationService.confirm({
        message: 'Êtes-vous sûr de vouloir continuer ?',
        accept: () => {
          this.calendrierService.deleteProjet(projet.idCa).subscribe(data=>{
            this.refresh();
          })
            //Actual logic to perform a confirmation
        }
    });
    }else{
      this.dialogService.open(NotAllowedComponent,{
        header: "Access Denied",
        height: "20rem",
        width: "30rem"
      })
    }
    
    
}

updateProject(id:number){
  if(localStorage.getItem("role") ==="Ordonnateur"){
    this.route.navigate(['/calendrier/update-projet',id])
  }else{
    this.dialogService.open(NotAllowedComponent,{
      header: "Access Denied",
      height: "20rem",
      width: "30rem"
    })
  }
 }


 ajoutProjet(){
  if(localStorage.getItem("role") ==="Ordonnateur"){
    this.route.navigate(['/calendrier/create-projet'])
  }else{
    this.dialogService.open(NotAllowedComponent,{
      header: "Access Denied",
      height: "20rem",
      width: "30rem"
    })
  }
 }

 detailsProjet(id:number){
  this.route.navigate(['/calendrier/details',id])
 }



}

