import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import {Fiche}from './fiche';
import { Projet } from '../calendrier/projet';
import { Observable } from 'rxjs';
import { environement } from 'src/environements/environements';

@Injectable({
  providedIn: 'root'
})
export class FicheprojetService {
  constructor(private httpClient:HttpClient) { }
createProjet(fiche:any, calId: number){
  return this.httpClient.post(environement.ficheEndpoint+""+calId,fiche);
}

getAllFiche(){
  return this.httpClient.get(environement.ficheEndpoint+"getAll");
}

deleteFiche(idFiche:number){
  return this.httpClient.post(environement.ficheEndpoint+"delete/"+idFiche, {});
}

getById(idFiche:number){
  return this.httpClient.get(environement.ficheEndpoint+""+idFiche);
  }

  updateFiche(idFiche:number,fiche:any){
    return this.httpClient.post(environement.ficheEndpoint+"update/"+idFiche,fiche)
  }

  getAllProjet():Observable<Projet[]>{
    return this.httpClient.get<Projet[]>(environement.host+"/fiche");
  }

 

  
}