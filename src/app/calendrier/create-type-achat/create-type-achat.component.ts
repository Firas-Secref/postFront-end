import { Component, OnInit } from '@angular/core';
import { TypeAchat } from '../type-achat';
import { Router } from '@angular/router';
import { TypeAchatService } from '../type-achat.service';
import { ConfirmationService } from 'primeng/api';
import { NotAllowedComponent } from 'src/app/composants/not-allowed/not-allowed.component';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-create-type-achat',
  templateUrl: './create-type-achat.component.html',
  styleUrls: ['./create-type-achat.component.scss']
})
export class CreateTypeAchatComponent implements OnInit{
  constructor(private dialogService: DialogService, private route:Router,private typeAchatService:TypeAchatService ,private confirm:ConfirmationService){}
  newTypeAchat=new TypeAchat();

  ngOnInit(): void {}

 ajoutTypeAchat(){
if(localStorage.getItem("role")=== "ADMINISTRATEUR"){
  this.confirm.confirm({
    message: 'Êtes-vous sûr de vouloir continuer ?',
    accept: () => {
      this.typeAchatService.createTypeAchat(this.newTypeAchat).subscribe(
        (res)=>{
          console.log(res);
          this.route.navigate(['/calendrier/view-list-type-achat']);
        }
      )

        //Actual logic to perform a confirmation
    }
});
}else{
      this.dialogService.open(NotAllowedComponent,{
        header: "Access Denied",
        height: "20rem",
        width: "30rem"
      })
    }
  
  







   
  } 
}
