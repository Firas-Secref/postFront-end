import { Component, OnInit } from '@angular/core';
import { Region } from '../region';
import { CalendrierService } from '../calendrier.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-create-region',
  templateUrl: './create-region.component.html',
  styleUrls: ['./create-region.component.scss']
})
export class CreateRegionComponent implements OnInit{

constructor(private  calendrierService:CalendrierService ,private route:Router, private confirmationService:ConfirmationService ){}
  ngOnInit(): void {}
  newRegion=new Region();


 



  ajoutRegion(){
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir continuer ?',
      accept: () => {
        this.calendrierService.createRegion(this.newRegion).subscribe(
          (res)=>{
            console.log(res);
            this.route.navigate(['/calendrier/view-list-region'])
           
          }
        )
        
       
          //Actual logic to perform a confirmation
      }
  });
   
  }

}
