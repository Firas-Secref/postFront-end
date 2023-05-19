
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendrierService } from '../calendrier.service';
import { ConfirmationService } from 'primeng/api';
import { NatureprojetService } from '../natureprojet.service';
import { NatureProjet } from '../nature-projet';

@Component({
  selector: 'app-view-list-type-projet',
  templateUrl: './view-list-type-projet.component.html',
  styleUrls: ['./view-list-type-projet.component.scss']
})
export class ViewListTypeProjetComponent implements OnInit  {
  natureProjetList!:NatureProjet[];
  constructor(
    private route :Router,
    private  natureProjetService:NatureprojetService,
    private confirmationService: ConfirmationService ){}
  ngOnInit():void{
    this.refresh();
  }


  refresh() {
    this.natureProjetService.getAllNatureProjet().subscribe(data=>{
      this.natureProjetList=data;
    })
  }



  ajoutTypeProjet(){
     this.route.navigate(['/calendrier/create-type-projet']);
  }


  updateTypeProjet(id:number){
    this.route.navigate(['/calendrier/update-type-projet',id])

  }

  deleteTypeProjet(natureProjet:NatureProjet){
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir continuer ?',
      accept: () => {
        this.natureProjetService.deleteNatureProjet(natureProjet.id).subscribe(data=>{
          this.refresh();
        })
          //Actual logic to perform a confirmation
      }
  });

  }



  
}
