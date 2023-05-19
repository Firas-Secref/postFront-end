import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendrierService } from '../calendrier.service';
import { Region } from '../region';

@Component({
  selector: 'app-update-region',
  templateUrl: './update-region.component.html',
  styleUrls: ['./update-region.component.scss']
})
export class UpdateRegionComponent implements OnInit{
  id!:any;
  regionUpdate:Region=new Region();

  constructor(private activatedRoute:ActivatedRoute,
    private calendrierService:CalendrierService,
    private route:Router ){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.calendrierService.getByIdRegion(this.id).subscribe(res=>{
      this.regionUpdate=res;
    })
    
  }

  update(){
    this.calendrierService.updateRegion(this.id,this.regionUpdate).subscribe(res=>{
      this.route.navigate(['/calendrier/view-list-region'])
    })
   
  }

}
