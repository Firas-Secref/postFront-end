import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import{Projet} from'./projet';
import { environement } from 'src/environements/environements';
import { Region } from './region';

@Injectable({
  providedIn: 'root'
})
export class CalendrierService {
  constructor(private httpClient:HttpClient){}

  createProjet(projet:FormData){
    return this.httpClient.post(environement.calendrierEndPoint,projet);
  }
  getById(idProj:number):Observable<Projet>{
    return this.httpClient.get<Projet>(environement.calendrierEndPoint+""+idProj);
  }
  updateProjet(idProj:number,pro:Projet):Observable<Projet>{
    return this.httpClient.post<Projet>(environement.calendrierEndPoint+""+idProj,pro);
  }


  deleteProjet(idProj:number){
    return this.httpClient.post(environement.calendrierEndPoint+"delete/"+idProj, {});
  }
  getAllProjet():Observable<any[]>{
    return this.httpClient.get<any[]>(environement.calendrierEndPoint+"getAll");


  }
/*service region*/
  createRegion(projet:any){
    return this.httpClient.post(environement.regionEndpoint+"new",projet);
  }
  getByIdRegion(idRegion:number):Observable<Region>{
    console.log(idRegion);
    
    return this.httpClient.get<Region>(environement.regionEndpoint+""+idRegion);
  }
  updateRegion(idRegion:number,region:Region):Observable<Region>{
    return this.httpClient.post<Region>(environement.regionEndpoint+"update/"+idRegion,region);
  }


  deleteRegion(idRegion:number){
    return this.httpClient.post(environement.regionEndpoint+"delete/"+idRegion, {});
  }
  getAllRegion():Observable<Region[]>{
    return this.httpClient.get<Region[]>(environement.regionEndpoint+"getAll");


  }
  








}
