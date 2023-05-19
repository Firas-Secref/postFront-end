import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirectionAchat } from '../direction-achat';
import { DirectionAchatService } from '../direction-achat.service';
import { ConfirmationService } from 'primeng/api';
import { NotAllowedComponent } from 'src/app/composants/not-allowed/not-allowed.component';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-create-direction-achat',
  templateUrl: './create-direction-achat.component.html',
  styleUrls: ['./create-direction-achat.component.scss']
})
export class CreateDirectionAchatComponent implements OnInit{

  constructor(private dialogService: DialogService, private route:Router,private directionAchatService:DirectionAchatService,private confirm:ConfirmationService){}
  newDirectionAchat=new DirectionAchat();

  ngOnInit(): void {}

  ajoutDirectionAchat(){


    if(localStorage.getItem("role")=== "ADMINISTRATEUR"){
      this.confirm
      .confirm({
        message: 'Êtes-vous sûr de vouloir continuer ?',
        accept: () => {
          this.directionAchatService.createDirectionAchat(this.newDirectionAchat).subscribe(
            (res)=>{
              console.log(res);
              this.route.navigate(['/calendrier/view-list-direction-achat']);
            }
          )
        }
        
      });    
    } else{
      this.dialogService.open(NotAllowedComponent,{
        header: "Access Denied",
        height: "20rem",
        width: "30rem"
      })
    }

    

}

}
