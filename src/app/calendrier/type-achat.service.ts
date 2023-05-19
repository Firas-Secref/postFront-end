import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeAchat } from './type-achat';
import { environement } from 'src/environements/environements';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeAchatService {

  constructor(private httpClient:HttpClient) { }



  createTypeAchat(typeAchat:any){
    return this.httpClient.post(environement.typeDachatEndpoint+"new",typeAchat);
  }

  getByIdTypeAchat(idTypeAchat:number):Observable<TypeAchat>{
    return this.httpClient.get<TypeAchat>(environement.typeDachatEndpoint+""+idTypeAchat);
  }
  updateTypeAchat(idTypeAchat:number,typeAchat:TypeAchat):Observable<TypeAchat>{
    return this.httpClient.post<TypeAchat>(environement.typeDachatEndpoint+"update/"+idTypeAchat,typeAchat);
  }

  deleteTypeAchat(idTypeAchat:number){
    return this.httpClient.post(environement.typeDachatEndpoint+"delete/"+idTypeAchat, {});
  }
  getAllTypeAchat():Observable<TypeAchat[]>{
    return this.httpClient.get<TypeAchat[]>(environement.typeDachatEndpoint+"getAll");
  }
}
