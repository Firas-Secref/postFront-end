import { OnInit } from '@angular/core';
import {ProjetAcceteService} from "../projet-accete.service";
import { CommonModule } from '@angular/common';
import { Component,ChangeDetectionStrategy,ViewChild,TemplateRef,} from '@angular/core';

import { CalendarOptions,EventClickArg  } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timrGridPlugin from '@fullcalendar/timegrid';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, map, mergeMap } from 'rxjs';
import {EventInput} from '@fullcalendar/core'
import interactionPlugin, { DateClickArg, EventDragStopArg } from '@fullcalendar/interaction';
import { BudgetService } from 'src/app/budget/budget.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { FicheprojetService } from 'src/app/ficheprojet/ficheprojet.service';
import { CalendrierService } from 'src/app/calendrier/calendrier.service';
import { Projet } from 'src/app/calendrier/projet';
import { ProjetEnCours } from '../projet-en-cours';
import { DialogService } from 'primeng/dynamicdialog';
import { NewProjectFormDialogComponent } from '../new-project-form-dialog/new-project-form-dialog.component';
import { NewProjectFormDialogService } from '../services/new-project-form-dialog.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotAllowedComponent } from 'src/app/composants/not-allowed/not-allowed.component';

@Component({
  selector: 'app-create-projet-accepte',
  templateUrl: './create-projet-accepte.component.html',
  styleUrls: ['./create-projet-accepte.component.scss']
})
export class CreateProjetAccepteComponent implements OnInit {
  newprojet=new ProjetEnCours();
  projetList:any[]=[];
  display: boolean = false;
  projetId:number=-1;
  projectForm!: FormGroup;
  projet!: any
  filterBy: string = ""


/*calendrier*/
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    editable:true,
    plugins: [dayGridPlugin,timrGridPlugin,interactionPlugin],
    height:'100vh',
    headerToolbar: {
      left:'prev,next',
center:'title',
right:''
    },
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.handleEventClick.bind(this),
    events: []
  };
  @ViewChild('modalContent', { static: true }) modalContent!: TemplateRef<any>;

 
  refresh = new Subject<void>();

  

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal,
    private budgetService:BudgetService,
    private route:Router,
    private confirmationService:ConfirmationService,
    private ficheprojet:FicheprojetService,
    private calendrierService:CalendrierService,
    private projetAccepte:ProjetAcceteService,
    private dialogService: DialogService,
    private projectService: NewProjectFormDialogService,
    private newProjectService: NewProjectFormDialogService,
    private fb: FormBuilder) {}
  ngOnInit():void{
    switch(localStorage.getItem("role")!){
      case "Direction d'achat divers": this.filterBy = "divers";  break;
      case "direction d'achat informatique": this.filterBy = "informatique"; break;
      case "Direction d'achat de travaux et batiment": this.filterBy = "batiment et travaux"; break
      default: this.filterBy = "all"; break;
    }
console.log(this.filterBy);

 /*   this.getProjet();   */
 this.initForm()

 this.getselectedProject()
 this.getUnselectedProjects()
  }


  handleDateClick(arg: DateClickArg) {

    if(localStorage.getItem("role") ==="Direction d'achat divers" || 
    localStorage.getItem("role") ==="direction de planification et budget" ||
    localStorage.getItem("role") ==="Direction d'achat de travaux et batiment"){
      console.log(arg.date.toISOString().substring(0,10));
      this.display = true;
      this.projectForm.patchValue({
        startDate: arg.date.toISOString().substring(0, 10)
      })
    }else{
     
        this.dialogService.open(NotAllowedComponent,{
          header: "Access Denied",
          height: "20rem",
          width: "30rem"
        })
      }
    
    
    // this.dialogService.open(NewProjectFormDialogComponent,{
    //   data: {
    //     startDate: arg.date
    //   }, 
    //   height: '28rem',
    //   width: '50rem',
    // }).onClose.subscribe(()=>{
    //   console.log("closedd");
    //   this.getselectedProject()
    // })
    // console.log("enter date click" , arg);
    
  }

  handleEventClick(arg: EventClickArg) {
    console.log(arg);
    this.route.navigate(['/calendrier/details',parseInt(arg.event.id)])

  }

 
  showDialog() {    
    this.display = true;
    
}


/*selectionner projet*/
/*
getProjet(){

  this.projetAccepte.gelByStatus("enCours").subscribe(data=>{
    this. projetList=data;
  });
}
ajoutProjet(){

}


getByStatus(){
  this.projetAccepte.getByStatus().subscribe(data=>{
    this.
  })
}
*/

getselectedProject(){
  const events : any[] = []

  this.projectService.getSelectedProduct().subscribe((data: any[])=>{
    console.log(data);
    data.forEach(e=>{
      events.push({title: e.sujet, start: e.dateDebutProjet?.substr(0, 10), end: e.dateAchevemetProjet?.substr(0, 10), color: e.couleur, id: e.idCa})
    })
    this.calendarOptions.events= events
    console.log(this.calendarOptions);
    
  })
}

getUnselectedProjects(){
  this.newProjectService.getUnselectedProduct().subscribe((projectsData: any[])=>{
    console.log(projectsData);
    
    if(this.filterBy ==="all"){
      this.projetList = projectsData
    }else{
      projectsData.forEach((obj: any)=>{
        console.log("aaaa", obj);
        
        if( obj.typeAchat === this.filterBy && obj.budgetSelected == true){
         this.projetList.push(obj)
        }
       })
       console.log(this.projetList);
    }
    console.log(projectsData);
    
  })
}

initForm(){
  this.projectForm = this.fb.group({
    project: ["", Validators.required],
    color: ["", Validators.required],
    startDate: ["", Validators.required],
    endDate: ["", Validators.required]
  })
}

submitForm(){

  if(localStorage.getItem("role") ==="Direction d'achat divers" || 
    localStorage.getItem("role") ==="direction d'achat informatique" ||
    localStorage.getItem("role") ==="direction de planification et budget" ||
    localStorage.getItem("role") ==="Direction d'achat de travaux et batiment")
    {
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
              this.getselectedProject()
              this.display = false;
              this.projectForm.reset()
            })
          )
        })
      ).subscribe()
    }else{
     
      this.dialogService.open(NotAllowedComponent,{
        header: "Access Denied",
        height: "20rem",
        width: "30rem"
      })
    }
  
}
}


