import { Component,OnInit} from '@angular/core';
import { Region } from 'src/app/calendrier/region';
import { BudgetService } from '../budget.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendrierService } from 'src/app/calendrier/calendrier.service';
import { ConfirmationService } from 'primeng/api';
import { FicheprojetService } from 'src/app/ficheprojet/ficheprojet.service';
import { NatureProjet } from 'src/app/calendrier/nature-projet';
import { NatureprojetService } from 'src/app/calendrier/natureprojet.service';
import { map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent  implements OnInit {

  id!:any;
  detailsProjet!:any;
  region!:Region;
  detailsBudget!:any;
  detailsFiche!:any;
  natureprojet!:NatureProjet;

  constructor(
    private budgetService:BudgetService,
    private router:Router , 
    private ficheprojet:FicheprojetService,
    private calendrierService:CalendrierService,
    private activatedRoute:ActivatedRoute,
    private confirmationService:ConfirmationService,
    private natureProjetService:NatureprojetService
    ){}

  ngOnInit():void{
    this.id=this.activatedRoute.snapshot.paramMap.get('id');

    // this.budgetService.getById(this.id).subscribe((res: any)=>{
    //   this.detailsBudget = res;
    // })
    // this.calendrierService.getByIdRegion(this.detailsProjet.region).subscribe(data=>{
    //   this.region = this.region;
    // })

    this.budgetService.getById(this.id).pipe(
      mergeMap((budget: any)=>{
        console.log(budget);
        this.detailsBudget = budget;
        console.log(this.detailsBudget);
        
        return this.calendrierService.getByIdRegion(budget.region).pipe(
          mergeMap((res: any)=>{
            this.region = res;
            console.log(budget);
            
            return this.natureProjetService.getByIdNatureProjet(budget.natureProjetId).pipe(
              map((nature: any)=>{
                console.log(budget);
                this.natureprojet = nature
              })
            )
          })
        )
      })
    ).subscribe()



    // this.budgetService.getById(this.id).subscribe(res=>{
      // console.log(res);
      
  //     this.detailsBudget=res;},error=>{},()=>{
  //       this.calendrierService.getByIdRegion(this.detailsProjet.region).subscribe(
  //         res=>{
  //           this.region=res
  //         }
  //       );
  //       this.natureProjetService.getByIdNatureProjet(this.detailsProjet.natureprojet).subscribe(
  //         res=>{
  //           this.natureprojet=res
  //         }
  //       )
  //     }  
      
      
      
      
      
      
      
  //     )

  }

}
