import { Component, Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendrierService } from '../calendrier.service';
import { ViewEncapsulation } from '@angular/compiler';
import { Projet } from '../projet';
import { Planning } from 'src/app/classes/planning';
import { ProgrammeBesoin } from 'src/app/classes/programme-besoin';
import { Region } from '../region';
import { RegionService } from '../region.service';
import { NatureProjet } from '../nature-projet';
import { NatureprojetService } from '../natureprojet.service';
import { ConfirmationService } from 'primeng/api';
import { DirectionAchatService } from '../direction-achat.service';
import { DirectionAchat } from '../direction-achat';
import { TypeAchatService } from '../type-achat.service';
import { TypeAchat } from '../type-achat';
import { UtilisatuersService } from 'src/app/admin/utilisatuers.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-create-projet',
  templateUrl: './create-projet.component.html',
  styleUrls: ['./create-projet.component.scss'],
  
})
export class CreateProjetComponent implements OnInit {
  newprojet=new Projet();
  regionList:Region[]=[];
  natureProjetList:NatureProjet[]=[];
  directionAchatList:DirectionAchat[]=[];
  typeAchatList:TypeAchat[]=[];
  activeIndex=0;
  projectForm!: FormGroup
  projectForm2!: FormGroup
  ordonnateur!: any;

  ajout(){
    const calendrier = {
      sujet: this.projectForm.value.sujet,
      numCompte: this.projectForm.value.numCompte,
      coutInitial: this.projectForm.value.coutInitial,
      coutMisAjour: this.projectForm.value.coutMisAjour,
      responsable: this.projectForm2.value.responsable,
      dateAgrementSpecifications: this.projectForm2.value.dateAgrementSpecifications,
      dateNegociation: this.projectForm2.value.dateNegociation,
      dateOuvertureSoumission: this.projectForm2.value.dateOuvertureSoumission,
      dateTransmissionComite: this.projectForm2.value.dateTransmissionComite,
      dateReponseCommite: this.projectForm2.value.dateReponseCommite,
    }

    const formData: FormData = new FormData();
    formData.append("calendrier", JSON.stringify(calendrier))
    formData.append("user", JSON.stringify(this.ordonnateur))
    this.confirmationService.confirm({
      message: "Êtes-vous sûr de vouloir continuer ?",
      accept: ()=>{
        this.calendrierService.getByIdRegion(this.projectForm.value.regionId).pipe(
          mergeMap((region: Region)=>{
            formData.append("region", JSON.stringify(region))
            console.log(region);
            console.log(formData.get("region"));
            return this.natureProjetService.getByIdNatureProjet(this.projectForm.value.natureProjets).pipe(
              mergeMap((natureProject: NatureProjet)=>{
                formData.append("natureProject", JSON.stringify(natureProject))
                console.log(natureProject);
                return this.typeAchatService.getByIdTypeAchat(this.projectForm.value.typeA).pipe(
                  mergeMap((typeA: TypeAchat)=>{
                    formData.append("typeAchat", JSON.stringify(typeA))
                    console.log(typeA);
                    return this.calendrierService.createProjet(formData).pipe(
                      map((res: any)=>{
                        console.log(res);
                        this.route.navigate(['/calendrier/view-list'])
    
                      })
                    )
                  })
                )
              })
            )
          })
        ).subscribe()
      }
    })
    console.log(this.newprojet);

    
    
  }
  constructor(private calendrierService:CalendrierService,
    private route:Router,
    private  natureProjetService:NatureprojetService,
    private confirmationService: ConfirmationService,
     private directionAchatService:DirectionAchatService,
     private typeAchatService:TypeAchatService,
     private utilisatuersService: UtilisatuersService,
     private fb: FormBuilder,
     private userService: UtilisatuersService
        ){}

  ngOnInit(): void {
    this.getRegion();
    this.getNatureProjet();
    this.getDirectionAchat();
    this.getTypeAchat();
    this.getUserById(parseInt(localStorage.getItem("userId")));
    this.initForm1();
    this.initForm2();

  }

  getRegion(){

    this.calendrierService.getAllRegion().subscribe(data=>{
      this.regionList=data;
      console.log(this.regionList);
      
    })
    
  }


getNatureProjet(){
  this.natureProjetService.getAllNatureProjet().subscribe(data=>{
    this.natureProjetList=data;
    
  })
}


getDirectionAchat(){
  this.directionAchatService.getAllDirectionAchat().subscribe(data=>{
    this.directionAchatList=data;
  })
}




getTypeAchat(){
  this.typeAchatService.getAllTypeAchat().subscribe(data=>{
    this.typeAchatList=data;
    })
}

getUserById(id: number){
  this.utilisatuersService.getByIdUtilisateur(id).subscribe(data=>{
    this.ordonnateur = data
    this.projectForm.patchValue({
      ordonnateurName : `${data.nom} ${data.prenom}`
    })
    
    
  })
}

initForm1(){
  this.projectForm = this.fb.group({
    regionId: ["", Validators.required],
    typeA: ["", Validators.required],
    natureProjets: ["",Validators.required],
    sujet: ["", Validators.required],
    numCompte: ["", Validators.required],
    coutInitial:["", Validators.required],
    coutMisAjour:["", Validators.required],
    ordonnateurName: [""]
  })
}


initForm2(){
  this.projectForm2 = this.fb.group({
    responsable:["", Validators.required],
    dateAgrementSpecifications: ["", Validators.required],
    dateNegociation: [""],
    dateOuvertureSoumission: [""],
    dateTransmissionComite: [""],
    dateReponseCommite: [""]
  })
}

}
