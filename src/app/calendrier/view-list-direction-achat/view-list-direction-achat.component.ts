import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirectionAchatService } from '../direction-achat.service';
import { ConfirmationService } from 'primeng/api';
import { DirectionAchat } from '../direction-achat';

@Component({
  selector: 'app-view-list-direction-achat',
  templateUrl: './view-list-direction-achat.component.html',
  styleUrls: ['./view-list-direction-achat.component.scss']
})
export class ViewListDirectionAchatComponent  implements OnInit {
  directionAchatList!:DirectionAchat[];
  constructor(
    private route :Router,
    private  directionAchatService:DirectionAchatService,
    private confirmationService: ConfirmationService ){}



  ngOnInit():void{
    this.refresh();  
  }



  refresh() {
    this.directionAchatService.getAllDirectionAchat().subscribe(data=>{
      this.directionAchatList=data;
      console.log(data);
      
    })
  }

  ajoutDirectionAchat(){
    this.route.navigate(['/calendrier/create-direction-achat']);
 }



 deleteDirectionAchat(directionAchat:DirectionAchat){
  this.confirmationService.confirm({
    message: 'Êtes-vous sûr de vouloir continuer ?',
    accept: () => {
      this.directionAchatService.deleteDirectionAchat(directionAchat.id).subscribe(data=>{
        this.refresh();
      })
        //Actual logic to perform a confirmation
    }
});
}



 updateDirectionAchat(id:number){
  this.route.navigate(['/calendrier/update-diection-achat',id])

}




}
