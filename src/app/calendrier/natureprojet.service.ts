import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from 'src/environements/environements';
import { NatureProjet } from './nature-projet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NatureprojetService {

  constructor(private httpClient:HttpClient) { }


  createNatureProjet(natureProjet:any){
    console.log(natureProjet);
    
    return this.httpClient.post(environement.addNatureProject,natureProjet);
  }
  getByIdNatureProjet(idNatureProjet:number):Observable<NatureProjet>{
    return this.httpClient.get<NatureProjet>(environement.natureProjetEndpoint+""+idNatureProjet);
  }
  updateNatureProjet(idNatureProjet:number,natureProjet:NatureProjet):Observable<NatureProjet>{
    return this.httpClient.post<NatureProjet>(environement.natureProjetEndpoint+"update/"+idNatureProjet,natureProjet);
  }


  deleteNatureProjet(idNatureProjet:number){
    return this.httpClient.post(environement.natureProjetEndpoint+"delete/"+idNatureProjet, {});
  }
  getAllNatureProjet():Observable<NatureProjet[]>{
    return this.httpClient.get<NatureProjet[]>(environement.addNatureProject+"getAll");


  }
}
