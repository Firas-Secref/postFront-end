import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from 'src/app/calendrier/projet';
import { environement } from '../../../environements/environements';

@Injectable({
  providedIn: 'root'
})
export class NewProjectFormDialogService {
  endPointForUnselectedProducts = "http://localhost:3000/projet?selected=true";
  endPointFortProducts = "http://localhost:3000/projet"

  constructor(private http: HttpClient) { }

  getUnselectedProduct(): Observable<any[]>{
    return this.http.get<any[]>(environement.calendrierEndPoint+"unSelected/"+false)
  }

  unselectProject(id: number, p: any):Observable<string>{
    return this.http.post<string>(`${environement.calendrierEndPoint}select/${id}`, p)
  }

  getProjectById(id: number): Observable<any>{
    return this.http.get<any>(`${environement.calendrierEndPoint}${id}`)
  }

  getSelectedProduct(): Observable<any[]>{
    return this.http.get<any[]>(environement.calendrierEndPoint+"selected/"+true)
  }
  
}
