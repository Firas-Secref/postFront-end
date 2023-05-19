import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from 'src/environements/environements';
import { ProjetEnCours } from './projet-en-cours';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetAccepteService {

  constructor(private httpClient:HttpClient) { }


  createProjetAccepte(projet:any){
    return this.httpClient.post(environement.host+"/projet-en-cours",projet);
  }

  getById(idProj:number):Observable<ProjetEnCours>{
    return this.httpClient.get<ProjetEnCours>(environement.host+"/projet-en-cours/"+idProj);
  }


  updateProjetAccepte(idProj:number,pro:ProjetEnCours):Observable<ProjetEnCours>{
    return this.httpClient.put<ProjetEnCours>(environement.host+"/projet-en-cours/"+idProj,pro);
  }


  deleteProjetAccepte(idProj:number){
    return this.httpClient.delete(environement.host+"/projet-en-cours/"+idProj);
  }


  gelAllProjet(ListProjet:ProjetEnCours):Observable<ProjetEnCours[]>{
    return this.httpClient.get<ProjetEnCours[]>(environement.host+"/projet-en-cours")
  }


  getByStatus(status:string):Observable<ProjetEnCours[]>{
    return this.httpClient.get<ProjetEnCours[]>(environement.host+"/projet-en-cours/"+status);
  }





}
