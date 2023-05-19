import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeAchatService } from '../type-achat.service';
import { TypeAchat } from '../type-achat';

@Component({
  selector: 'app-update-type-achat',
  templateUrl: './update-type-achat.component.html',
  styleUrls: ['./update-type-achat.component.scss']
})
export class UpdateTypeAchatComponent  implements OnInit {
  id!:any;
  typeAchatUpdate:TypeAchat=new TypeAchat();
  constructor(
    private route:Router,
    private activatedRoute:ActivatedRoute,
    private  typeAchatService:TypeAchatService ){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.typeAchatService.getByIdTypeAchat(this.id).subscribe(res=>{
      this.typeAchatUpdate=res;
  })
}


update(){
  this.typeAchatService.updateTypeAchat(this.id,this. typeAchatUpdate).subscribe(res=>{
    this.route.navigate(['/calendrier/view-list-type-achat'])
  })
}

}
