import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Budget } from '../budget';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-budget',
  templateUrl: './update-budget.component.html',
  styleUrls: ['./update-budget.component.scss']
})
export class UpdateBudgetComponent  implements OnInit{
  id!:any;
  budgetFormGroup!: FormGroup
 budgetupdate:any = new Budget();
  constructor(  private budgetService:BudgetService,
    private route:Router, private fb: FormBuilder,
    private activatedRoute:ActivatedRoute){ }


  ngOnInit():void{
    this.initForm()
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.budgetService.getById(this.id).subscribe(res=>{
      this.budgetupdate=res;
      this.budgetFormGroup.patchValue({
        dateDebutMiseEnOeuvre: new Date(res.dateDebutMiseEnOeuvre).toISOString().substring(0,10).replace("/","-")
      })
      console.log(this.budgetFormGroup.value)
      
    })
  }


updatebudget(){
  this.budgetService.updateBudget(this.id,this.budgetupdate).subscribe(res =>{
    this.route.navigate(['/budget/view-list'])
  })
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
