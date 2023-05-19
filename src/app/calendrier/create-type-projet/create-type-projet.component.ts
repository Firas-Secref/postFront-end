import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendrierService } from '../calendrier.service';
import { NatureProjet } from '../nature-projet';
import { NatureprojetService } from '../natureprojet.service';
import { ConfirmationService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-type-projet',
  templateUrl: './create-type-projet.component.html',
  styleUrls: ['./create-type-projet.component.scss']
})
export class CreateTypeProjetComponent implements OnInit {
  constructor(private  natureProjeetService:NatureprojetService,private route:Router ,private confirm:ConfirmationService, private fb: FormBuilder){}
  ngOnInit(): void {
    this.form = this.fb.group({
      nature: ["", Validators.required]
    })
  }
  newNature=new NatureProjet();
  form!: FormGroup


  ajoutNature(){
    
    this.confirm.confirm({
      message: 'Êtes-vous sûr de vouloir continuer ?',
      accept: () => {
        this.natureProjeetService.createNatureProjet(this.form.value).subscribe(
          (res)=>{
            console.log(res);
            this.route.navigate(['/calendrier/view-list-type-projet']);
          }
        )
       
        
       
          //Actual logic to perform a confirmation
      }
  });







    
  }




}
