import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from 'src/environements/environements';
import { Observable } from 'rxjs';
import { DirectionAchat } from './direction-achat';

@Injectable({
  providedIn: 'root'
})
export class DirectionAchatService {

  constructor(private httpClient:HttpClient) { }



  createDirectionAchat(directionAchat:any){
    return this.httpClient.post(environement.directionDachatEndPoint+"new/",directionAchat);
  }

  getByIdDirectionAchat(idDirectionAchat:number):Observable<DirectionAchat>{
    return this.httpClient.get<DirectionAchat>(environement.directionDachatEndPoint+""+idDirectionAchat);
  }
  updateDirectionAchat(idDirectionAchat:number,directionAchat:DirectionAchat):Observable<DirectionAchat>{
    return this.httpClient.post<DirectionAchat>(environement.directionDachatEndPoint+"update/"+idDirectionAchat,directionAchat);
  }

  deleteDirectionAchat(idDirectionAchat:number){
    return this.httpClient.post(environement.directionDachatEndPoint+"delete/"+idDirectionAchat,{});
  }
  getAllDirectionAchat():Observable<DirectionAchat[]>{
    return this.httpClient.get<DirectionAchat[]>(environement.directionDachatEndPoint+"getAll");


  }
}
