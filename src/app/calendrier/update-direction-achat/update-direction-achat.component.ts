import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirectionAchatService } from '../direction-achat.service';
import { DirectionAchat } from '../direction-achat';

@Component({
  selector: 'app-update-direction-achat',
  templateUrl: './update-direction-achat.component.html',
  styleUrls: ['./update-direction-achat.component.scss']
})
export class UpdateDirectionAchatComponent implements OnInit {
  id!:any;
  directionAchatUpdate:DirectionAchat=new DirectionAchat();


  constructor(
    private route:Router,
    private activatedRoute:ActivatedRoute,
    private  directinAchatService:DirectionAchatService ){}

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.directinAchatService.getByIdDirectionAchat(this.id).subscribe(res=>{
      this.directionAchatUpdate=res;
  })
  }



  update(){
    this.directinAchatService.updateDirectionAchat(this.id,this.directionAchatUpdate).subscribe(res=>{
      this.route.navigate(['/calendrier/view-list-direction-achat'])
    })
  }


}
