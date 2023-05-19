import { Component, OnInit } from '@angular/core';
import { Region } from '../region';
import { CalendrierService } from '../calendrier.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { NotAllowedComponent } from 'src/app/composants/not-allowed/not-allowed.component';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-view-list-region',
  templateUrl: './view-list-region.component.html',
  styleUrls: ['./view-list-region.component.scss']
})
export class ViewListRegionComponent  implements OnInit {


  constructor(private calendrierService:CalendrierService,
              private route:Router,
              private confirmationService:ConfirmationService,
              private dialogService: DialogService ){}
  regionList!:Region[];

  ngOnInit(): void {
    this.refresh();
    
  }


  refresh() {
    this.calendrierService.getAllRegion().subscribe(data=>{
      this.regionList=data;
    });
  }




  deleteRegion(region: Region) {

    if(localStorage.getItem("role")=== "ADMINISTRATEUR"){
      this.confirmationService.confirm({
        message: 'Êtes-vous sûr de vouloir continuer ?',
        accept: () => {
          this.calendrierService.deleteRegion(region.id).subscribe(data=>{
            this.refresh();
          })
            //Actual logic to perform a confirmation
        }
    });    }else{
      this.dialogService.open(NotAllowedComponent,{
        header: "Access Denied",
        height: "20rem",
        width: "30rem"
      })
    }
    
   
}



updateRegion(id:number){
  if(localStorage.getItem("role")=== "ADMINISTRATEUR"){
    this.route.navigate(['/calendrier/update-region',id])
  }else{
    this.dialogService.open(NotAllowedComponent,{
      header: "Access Denied",
      height: "20rem",
      width: "30rem"
    })
  }
 }

 ajoutRegion(){

  if(localStorage.getItem("role")=== "ADMINISTRATEUR"){
    this.route.navigate(['/calendrier/create-region'])
  }else{
    this.dialogService.open(NotAllowedComponent,{
      header: "Access Denied",
      height: "20rem",
      width: "30rem"
    })
  }
  
 }




}
