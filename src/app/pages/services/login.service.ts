import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environement } from 'src/environements/environements';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  login(login: any): Observable<any>{
  
    return this.http.post<any>(`${environement.loginEndpoint}`, login,{observe: "response"})
  }
}
