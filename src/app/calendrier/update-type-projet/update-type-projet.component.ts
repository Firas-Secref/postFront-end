import { Component, OnInit } from '@angular/core';
import { NatureProjet } from '../nature-projet';
import { ActivatedRoute, Router, RouterConfigOptions } from '@angular/router';
import { NatureprojetService } from '../natureprojet.service';

@Component({
  selector: 'app-update-type-projet',
  templateUrl: './update-type-projet.component.html',
  styleUrls: ['./update-type-projet.component.scss']
})
export class UpdateTypeProjetComponent implements OnInit {
  id!:any;
  natureProjetUpdate:NatureProjet=new NatureProjet();
  constructor(
    private route:Router,
    private activatedRoute:ActivatedRoute,
    private  natureProjetService:NatureprojetService ){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.natureProjetService.getByIdNatureProjet(this.id).subscribe(res=>{
      this.natureProjetUpdate=res;
    })
    
  }



  update(){
    this.natureProjetService.updateNatureProjet(this.id,this.natureProjetUpdate).subscribe(res=>{
      this.route.navigate(['/calendrier/view-list-type-projet'])
    })
  }

}
