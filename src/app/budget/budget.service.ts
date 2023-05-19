import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Budget } from './budget';
import { Observable } from 'rxjs';
import { environement } from 'src/environements/environements';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private httpClient:HttpClient) { }


  createBudget(budget:any){
    return this.httpClient.post(environement.budgetEndpoint,budget);
  }


  getAllBudget(){
    return this.httpClient.get(environement.budgetEndpoint+"getAll");
  }



  deleteBudget(idBudget:number){
    return this.httpClient.post(environement.budgetEndpoint+"delete/"+idBudget, {});
  }



  getById(idBudget:number){
    return this.httpClient.get<Budget>(environement.budgetEndpoint+"getById/"+idBudget);
    }

    updateBudget(idBudget:number,budget:Budget):Observable<Budget>{
      return this.httpClient.post<Budget>(environement.budgetEndpoint+"update/"+idBudget,budget)
    }
  
  
  
}
