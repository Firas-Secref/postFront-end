import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjetEnCours } from '../projet-en-cours';
import { NewProjectFormDialogService } from '../services/new-project-form-dialog.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Projet } from 'src/app/calendrier/projet';
import { map, merge, mergeMap } from 'rxjs';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-new-project-form-dialog',
  templateUrl: './new-project-form-dialog.component.html',
  styleUrls: ['./new-project-form-dialog.component.scss']
})
export class NewProjectFormDialogComponent implements OnInit, OnDestroy {
  display: boolean = false;
  projet: any;
  projetList:any[]=[];
  newprojet=new ProjetEnCours();
  projectForm!: FormGroup


  constructor(private newProjectService: NewProjectFormDialogService,
     private fb: FormBuilder, private dialogConfig: DynamicDialogConfig, private dialogRef: DynamicDialogRef){}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    
    
    this.initForm();
    this.getUnselectedProjects();
    
  }

  getUnselectedProjects(){
    this.newProjectService.getUnselectedProduct().subscribe((projectsData: any[])=>{
      this.projetList = projectsData;
      console.log(projectsData);
      
    })
  }



  submitForm(){
    console.log(this.projectForm.value);
    
    this.newProjectService.getProjectById(parseInt(this.projectForm.value.project)).pipe(
      mergeMap((projet: any)=>{
        console.log(projet);
        
        this.projet = projet
        this.projet.selected = true;
        this.projet.couleur = this.projectForm.value.color
        this.projet.dateDebutProjet = new Date(this.projectForm.value.startDate);
        this.projet.dateAchevemetProjet = new Date(this.projectForm.value.endDate);
        console.log(this.projet);
        
        return this.newProjectService.unselectProject(this.projet.idCa, this.projet).pipe(
          map((data: any)=>{
          })
        )
      })
    ).subscribe()
  }

  initForm(){
    this.projectForm = this.fb.group({
      project: ["", Validators.required],
      color: ["", Validators.required],
      startDate: [this.dialogConfig.data.startDate.toISOString().substr(0, 10), Validators.required],
      endDate: ["", Validators.required]
    })
  }

  
}
