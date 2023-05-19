import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FicheprojetService } from '../ficheprojet.service';
import { Fiche } from '../fiche';
import { ConfirmationService } from 'primeng/api';
import { CalendrierService } from 'src/app/calendrier/calendrier.service';
import { Projet } from 'src/app/calendrier/projet';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit{
  ficheList:any[] = [];
  projetList:any[]=[];
  projetId:number=-1;
  filterBy: string = ""
  constructor( private route:Router ,private ficheprojet:FicheprojetService,
    private confirmationService:ConfirmationService,private calendrierService:CalendrierService){}
  ngOnInit(): void {
    switch(localStorage.getItem("role")!){
      case "Direction d'achat divers": this.filterBy = "divers";  break;
      case "direction d'achat informatique": this.filterBy = "informatique"; break;
      case "Direction d'achat de travaux et batiment": this.filterBy = "batiment et travaux"; break
      default: this.filterBy = "all"; break;
    }
    console.log(this.filterBy);
    
  this.refresh();
  this.getProjet();
  
  
  }
  refresh(){
    this.ficheprojet.getAllFiche().subscribe((data: any[])=>{
      console.log(data);
      
      if(this.filterBy ==="all"){
        this.ficheList = data
      }else{
        data.forEach((obj: any)=>{
          if( obj.typeAchat === this.filterBy){
           this.ficheList.push(obj)
          }
         })
         console.log(data);
      }
      
      
      
 })
  }


  deleteFiche(fiche:Fiche) {
    this.confirmationService.confirm({
        message: 'Êtes-vous sûr de vouloir continuer ?',
        accept: () => {
          this.ficheprojet.deleteFiche(fiche.id).subscribe(data=>{
            this.refresh();
            
          })
          
            //Actual logic to perform a confirmation
        }
    });
}
  

  
  updateFiche(id:number){
    this.route.navigate(['fichedeprojet/update-projet',id])
   }


 ajoutfiche(){
  this.route.navigate(['/fichedeprojet/create-projet/' + this.projetId])
 } 


 ajoutf(id:number){
  this.route.navigate(['/fichedeprojet/create-projet'])
 }
 
 

 detailsFiche(id:number){
  this.route.navigate(['/fichedeprojet/details',id])
 }


 display: boolean = false;

    showDialog() {
        this.display = true;
    }

   

getProjet(){
  this.calendrierService.getAllProjet().subscribe((data: any[])=>{
    console.log(this.filterBy);
    
    if(this.filterBy ==="all"){
      this.projetList = data
    }else{
      data.forEach(obj=>{
        if(obj.typeAchat === this.filterBy){
          this.projetList.push(obj)
        }
      })
      console.log(this.projetList);
    }
   
    
    
  });
}

}
