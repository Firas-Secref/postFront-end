import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisatuersService } from '../utilisatuers.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utilisateur } from '../utilisatuer';

@Component({
  selector: 'app-update-inscription',
  templateUrl: './update-inscription.component.html',
  styleUrls: ['./update-inscription.component.scss']
})
export class UpdateInscriptionComponent implements OnInit {
  id!:any;
  utilisateurUpdate:Utilisateur = new Utilisateur();
  constructor(
    private route:Router,
    private activatedRoute:ActivatedRoute,
    private userService:UtilisatuersService){}


ngOnInit(): void {
  this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getByIdUtilisateur(this.id).subscribe(res=>{
      this.utilisateurUpdate=res;
      
    })
  
}

update() {
  this.userService.updateUtilisateur(this.id,this.utilisateurUpdate).subscribe(res=>{
    this.route.navigate(['/admin/view-list-utilisateurs'])
  })
  
}
  /*
  inputForm!:FormGroup;
id!:number;


  constructor(
    private route:Router,
    private activatedRoute:ActivatedRoute,
    private  userService:UtilisatuersService,
    private fb:FormBuilder){}


  ngOnInit(): void {

    this.inputForm=this.fb.group(
      {
        "nom":["",Validators.required],
         "prenom":["",Validators.required],
         "telephone":["",Validators.required],
         "email":["",Validators.required],
         "matricule":["",Validators.required],
       
         "motDePasse":["",Validators.required]



      }
    )
   
    
  



  this.activatedRoute.params.subscribe(
    (param)=>{

      console.log("parametre passer"+param['id'])
      this.id=param['id'],
      this.userService.getByIdUtilisateur(param['id']).subscribe(
        (usrupdate)=>{
          console.log(usrupdate.nom)
          this.inputForm.controls['nom'].setValue(usrupdate.nom)
          this.inputForm.controls['prenom'].setValue(usrupdate.prenom)
          this.inputForm.controls['telephone'].setValue(usrupdate.telephone)
          this.inputForm.controls['matricule'].setValue(usrupdate.matricule)
          this.inputForm.controls['email'].setValue(usrupdate.email)
          this.inputForm.controls['motDePasse'].setValue(usrupdate.motDePasse)
        }
      )

    }
  )
  }
  
  
  updateUser(){
    let usr=new Utilisateur()
    usr.nom=this.inputForm.controls['nom'].value
    usr.prenom=this.inputForm.controls['prenom'].value
    usr.telephone=this.inputForm.controls['telephone'].value
    usr.matricule=this.inputForm.controls['matrincule'].value
    usr.email=this.inputForm.controls['email'].value
    usr.motDePasse=this.inputForm.controls['motDePasse'].value
    

    
    this.userService.updateUtilisateur(this.id,usr).subscribe(
      (altuser)=>{
        console.log(altuser.nom)
      }
    )

  }*/



}
