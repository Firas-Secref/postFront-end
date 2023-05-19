import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeAchatService } from '../type-achat.service';
import { ConfirmationService } from 'primeng/api';
import { TypeAchat } from '../type-achat';

@Component({
  selector: 'app-view-list-type-achat',
  templateUrl: './view-list-type-achat.component.html',
  styleUrls: ['./view-list-type-achat.component.scss']
})
export class ViewListTypeAchatComponent implements OnInit {
  typeAchatList!:TypeAchat[];

  constructor(
    private route :Router,
    private  typeAchatService:TypeAchatService,
    private confirmationService: ConfirmationService ){}

  ngOnInit():void{
    this.refresh();
    
  }


  refresh() {
    this.typeAchatService.getAllTypeAchat().subscribe(data=>{
      this.typeAchatList=data;
      console.log(data);
      
    })
  }


  ajoutTypeAchat(){
    this.route.navigate(['/calendrier/create-type-achat']);
 }


  deleteTypeAchat(typeAchat:TypeAchat){
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir continuer ?',
      accept: () => {
        this.typeAchatService.deleteTypeAchat(typeAchat.id).subscribe(data=>{
          this.refresh();
        })
          //Actual logic to perform a confirmation
      }
  });
  }


  updateTypeAchat(id:number){
    this.route.navigate(['/calendrier/update-type-achat',id])

  }

}
