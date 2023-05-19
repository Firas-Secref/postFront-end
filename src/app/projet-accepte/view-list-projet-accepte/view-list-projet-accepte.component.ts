import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { BudgetService } from 'src/app/budget/budget.service';
import { CalendrierService } from 'src/app/calendrier/calendrier.service';
import { Projet } from 'src/app/calendrier/projet';
import { FicheprojetService } from 'src/app/ficheprojet/ficheprojet.service';

@Component({
  selector: 'app-view-list-projet-accepte',
  templateUrl: './view-list-projet-accepte.component.html',
  styleUrls: ['./view-list-projet-accepte.component.scss']
})
export class ViewListProjetAccepteComponent implements OnInit {
  projetList:Projet[]=[];
  display: boolean = false;
  projetId:number=-1;
  constructor(private budgetService:BudgetService,
    private route:Router,
    private confirmationService:ConfirmationService,
    private ficheprojet:FicheprojetService,
    private calendrierService:CalendrierService){}


  ngOnInit(): void{
    this.getProjet();  
  }

  getProjet(){
    this.calendrierService.getAllProjet().subscribe(data=>{
      this.projetList=data;
    });
  }

  

}
