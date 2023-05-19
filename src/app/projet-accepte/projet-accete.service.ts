import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjetAcceteService {

  constructor(private http: HttpClient) { }

/*
  getEvents() {
    return this.http.get('showcase/resources/data/calendarevents.json')
      .toPromise()
      .then(res => <any[]> res.json().data)
      .then(data => { return data; });
  }
}*/









}
