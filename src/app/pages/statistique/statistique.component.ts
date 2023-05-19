import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/budget/budget.service';
import { CalendrierService } from 'src/app/calendrier/calendrier.service';
import { FicheprojetService } from 'src/app/ficheprojet/ficheprojet.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {

  acceptedProject: number = 0;
  fiches: number = 0;
  budgets: number = 0;
  allProjects: number = 0;

  constructor(private projectService: CalendrierService, 
    private fichService: FicheprojetService,
    private budgetService: BudgetService){}

  ngOnInit(): void {
    this.getAllfiches();
    this.getAllEtudeBudgetaire()
    this.getAllProjects()
  }

  getAllfiches(){
    this.fichService.getAllFiche().subscribe((data: any[])=>{
      this.fiches = data.length;
    })
  }

  getAllEtudeBudgetaire(){
    this.budgetService.getAllBudget().subscribe((data: any[])=>{
      this.budgets = data.length      
    })
  }

  getAllProjects(){
    this.projectService.getAllProjet().subscribe((data:any[])=>{
      this.allProjects = data.length;
      data.forEach(p=>{
        
        if(p.selected){
          this.acceptedProject+=1;
        } 
      })

      console.log(this.acceptedProject);
      
      
    })
  }

}
