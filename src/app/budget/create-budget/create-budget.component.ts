import { Component, OnInit } from '@angular/core';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Region } from 'src/app/calendrier/region';
import { CalendrierService } from 'src/app/calendrier/calendrier.service';
import { FormsModule, NgForm, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { NatureProjet } from 'src/app/calendrier/nature-projet';
import { NatureprojetService } from 'src/app/calendrier/natureprojet.service';

@Component({
  selector: 'app-create-budget',
  templateUrl: './create-budget.component.html',
  styleUrls: ['./create-budget.component.scss']
})
export class CreateBudgetComponent  implements OnInit{
  budgetFormGroup!: FormGroup
  newBudget=new Budget();
id!:any;
  detailsProjet!:any;
  region!:Region;
  natureprojet!:NatureProjet;
  constructor(private budgetService:BudgetService,
    private fb: FormBuilder,
              private router:Router , 
              private calendrierService:CalendrierService,
              private activatedRoute:ActivatedRoute,
              private confirmationService:ConfirmationService,
              private natureProjetService:NatureprojetService){}

              ngOnInit():void{
                this.initForm();

                this.id=this.activatedRoute.snapshot.paramMap.get('id');
                this.newBudget.id_projet = parseInt(this.id)
                this.calendrierService.getById(this.id).subscribe(res=>{
                  this.detailsProjet=res;
                  this.budgetFormGroup.patchValue({
                    budgetEstimee: res.coutInitial
                  })
                  console.log(res);
                  
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
                })


              }
  
        



  ajoutnew(){
    console.log(this.newBudget);
    
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir continuer ?',
      accept: () => {
        console.log(this.newBudget);
        
        this.budgetService.createBudget(this.newBudget).subscribe(
          (res)=>{
            console.log(res);
            this.router.navigate(['/budget/view-list'])
          }
        )
       
          //Actual logic to perform a confirmation
      }
  });
    
  }

  initForm(){
    this.budgetFormGroup = this.fb.group({
      numCompte:[null, Validators.required],
      typeFinancement: ["", Validators.required],
      budgetEstimee: ["", Validators.required],
      budgetValidee: ["", Validators.required],
      dateDebutMiseEnOeuvre: ["", Validators.required],
      delaiRealisation: ["", Validators.required],
    })
  }

  
  
 

}
