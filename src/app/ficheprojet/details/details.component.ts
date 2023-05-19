import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FicheprojetService } from '../ficheprojet.service';
import { Region } from 'src/app/calendrier/region';
import { CalendrierService } from 'src/app/calendrier/calendrier.service';
import { NatureProjet } from 'src/app/calendrier/nature-projet';
import { NatureprojetService } from 'src/app/calendrier/natureprojet.service';
import { map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id!:any;
  detailsProjet!:any;
  region!:Region;
  natureprojet!:any;
  detailsFiche!:any;
constructor(
  private route:Router,

  private ficheService:FicheprojetService,
  private activatedRoute:ActivatedRoute,
  private calendrierService:CalendrierService,
  private natureProjetService:NatureprojetService){}

ngOnInit(): void {
  this.id=this.activatedRoute.snapshot.paramMap.get('id');

  this.ficheService.getById(this.id).pipe(
    mergeMap((fiche: any)=>{
      this.detailsFiche= fiche;
      console.log("fich", fiche);
      
      return this.calendrierService.getByIdRegion(fiche.region).pipe(
        mergeMap((region: any)=>{
          console.log("region", region);
          this.region = region;
          return this.natureProjetService.getByIdNatureProjet(this.detailsFiche.natureProjetId).pipe(
            map((nature: any)=>{
              console.log("nature", nature);
              this.natureprojet = nature;
            })
          )
        })
      )
    })
  ).subscribe()

  // this.ficheService.getById(this.id).subscribe(res=>{
  //   this.detailsFiche=res;console.log(this.detailsFiche.region);
    // },error=>{},()=>{
    //   this.calendrierService.getByIdRegion(this.detailsProjet.region).subscribe(
    //     res=>{
    //       this.region=res
    //     }
    //   );
    //   this.natureProjetService.getByIdNatureProjet(this.detailsProjet.natureprojet).subscribe(
    //     res=>{
    //       this.natureprojet=res
    //     }
    //   )
    // } )
  
}

}
