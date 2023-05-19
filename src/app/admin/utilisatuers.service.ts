import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from 'src/environements/environements';

import { Observable } from 'rxjs';
import { Utilisateur } from './utilisatuer';

@Injectable({
  providedIn: 'root'
})
export class UtilisatuersService {

  constructor(private httpClient:HttpClient) { }
  createUtilisateur(utilisateur:FormData){
    return this.httpClient.post(environement.addNewUpdateDeleteUser+"new",utilisateur);
  }



  getByIdUtilisateur(idUtilisateur:number):Observable<Utilisateur>{
    return this.httpClient.get<Utilisateur>(`${environement.getUserById}/${idUtilisateur}`);
  }
  updateUtilisateur(idUtilisateur:number,utilisateur:Utilisateur):Observable<Utilisateur>{
    return this.httpClient.post<Utilisateur>(`${environement.addNewUpdateDeleteUser}update/${idUtilisateur}`,utilisateur);
  }

  deleteUtilisateur(idUtilisateur:number): Observable<any>{
    return this.httpClient.post(`${environement.addNewUpdateDeleteUser}${idUtilisateur}`,{} );
  }
  getAllUtilisateur():Observable<Utilisateur[]>{
    return this.httpClient.get<Utilisateur[]>(environement.getAllUser);
  }








}
