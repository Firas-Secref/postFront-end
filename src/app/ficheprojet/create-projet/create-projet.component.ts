import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FicheprojetService } from '../ficheprojet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendrierService } from 'src/app/calendrier/calendrier.service';
import { Region } from 'src/app/calendrier/region';
import { NatureProjet } from 'src/app/calendrier/nature-projet';
import { NatureprojetService } from 'src/app/calendrier/natureprojet.service';

@Component({
  selector: 'app-create-projet',
  templateUrl: './create-projet.component.html',
  styleUrls: ['./create-projet.component.scss']
})
export class CreateProjetComponent implements OnInit  {
  newfiche={
    nomChefProjet:'',
    gradeChefProjet:'',
    telChefProjet:'',
    emailChefProjet:'',

    nomOrdonnateur:'',
    gradeOrdonnateur:'',
    telOrdonnateur:'',
    emailOrdonnateur:'',

    nomRepresentantService:'',
    gradeRepresentantService:'',
    telRepresentantService:'',
    emailRepresentantService:''
  }

  currentCalender!: any
  id!:any;
  detailsProjet!:any;
  region!:Region;
  natureprojet!:NatureProjet;
  fichForm!: FormGroup

  constructor(private ficheprojet:FicheprojetService,
              private router:Router,
              private calendrierService:CalendrierService,
              private activatedRoute:ActivatedRoute,
              private natureProjetService:NatureprojetService){}

  ajoutnew(){
    console.log(this.newfiche);
    

    this.ficheprojet.createProjet(this.newfiche, this.id).subscribe(
      (res)=>{
        console.log(res);
    this.router.navigate(['/fichedeprojet/view-list'])

      }
    )
  }



ngOnInit():void{
  this.id=this.activatedRoute.snapshot.paramMap.get('id');
      this.calendrierService.getById(this.id).subscribe(res=>{
        console.log('res ' , res)
        this.currentCalender = res
      this.detailsProjet=res;
    } , error => {} , () => {
      this.calendrierService.getByIdRegion(this.detailsProjet.region).subscribe(
        res => {
          this.region = res
        }
      );
      this.natureProjetService.getByIdNatureProjet(this.detailsProjet.natureprojet).subscribe(
        res=>{
          this.natureprojet=res
        }
      )
    }
    )
}





}
