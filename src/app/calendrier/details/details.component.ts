import { Component, OnInit } from '@angular/core';
import { CalendrierService } from '../calendrier.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from '../region';
import { NatureProjet } from '../nature-projet';
import { NatureprojetService } from '../natureprojet.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  id!:any;
  detailsProjet!:any;
  region!:Region;
  natureprojet!:NatureProjet;

  constructor(
    private route:Router,
    private calendrierService:CalendrierService,
    private activatedRoute:ActivatedRoute,
    private natureProjetService:NatureprojetService){}

  ngOnInit():void{ 
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.calendrierService.getById(this.id).subscribe(res=>{
      this.detailsProjet=res; } , error => {} , () => {
      this.calendrierService.getByIdRegion(this.detailsProjet.region).subscribe(
        res => {
          this.region = res
        }
      );
      this.natureProjetService.getByIdNatureProjet(this.detailsProjet.natureprojet).subscribe(
        res=>{
          this.natureprojet=res
        }
      )

    }
    )
    
  }
}


/*,
    ()=>{
      this.natureProjetService.getByIdNatureProjet(this.detailsProjet.natureProjet).subscribe(
      res=>{
        this.region=res
      }
    )
    }*/
