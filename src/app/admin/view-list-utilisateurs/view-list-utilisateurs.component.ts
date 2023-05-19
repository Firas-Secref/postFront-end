import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisatuersService } from '../utilisatuers.service';
import { Utilisateur } from '../utilisatuer';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { NotAllowedComponent } from 'src/app/composants/not-allowed/not-allowed.component';


@Component({
  selector: 'app-view-list-utilisateurs',
  templateUrl: './view-list-utilisateurs.component.html',
  styleUrls: ['./view-list-utilisateurs.component.scss']
})
export class ViewListUtilisateursComponent implements OnInit {
  tabUtilisateur:Utilisateur[]=[];

  constructor(private dialogService: DialogService, private route:Router,private userservice:UtilisatuersService,private confirmationService:ConfirmationService){}
  ngOnInit(): void {
    if(localStorage.getItem("role")=== "ADMINISTRATEUR"){
      this.refresh();
    }else{
      this.dialogService.open(NotAllowedComponent,{
        header: "Access Denied",
        height: "20rem",
        width: "30rem"
      })
    }
  }



  refresh() {
    this.userservice.getAllUtilisateur().subscribe(data=>{
      this.tabUtilisateur=data;
      
    })
  }

  ajoutUser(){
    if(localStorage.getItem("role")=== "ADMINISTRATEUR"){
      this.route.navigate(['/admin/inscription']);
    }else{
      this.dialogService.open(NotAllowedComponent,{
        header: "Access Denied",
        height: "20rem",
        width: "30rem"
      })
    }
 }



  deleteUser(utilisateur:Utilisateur){
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir continuer ?',
      accept: () => {
        this.userservice.deleteUtilisateur(utilisateur.id).subscribe(data=>{
          this.refresh();
        })
          //Actual logic to perform a confirmation
      }
  });
  }

  updateUser(id:number){
    if(localStorage.getItem("role")=== "ADMINISTRATEUR"){
      this.route.navigate(['/admin/update-utilisateur',id])
    }else{
      this.dialogService.open(NotAllowedComponent,{
        header: "Access Denied",
        height: "20rem",
        width: "30rem"
      })
    }
   /* this.route.navigate();*/
  }

}
