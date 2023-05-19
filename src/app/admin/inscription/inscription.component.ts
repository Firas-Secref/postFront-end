import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisatuersService } from '../utilisatuers.service';
import { Utilisateur } from '../utilisatuer';
import { ConfirmationService } from 'primeng/api';
import { roles } from 'src/app/classes/roles';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  newUtilisateur=new Utilisateur();
  id!:any;
  rolesOptions = roles
  selectedRole: any
  inscriptionForm!: FormGroup
  constructor(private fb: FormBuilder,private route:Router,private userService:UtilisatuersService, private confirmationService:ConfirmationService){}
  ngOnInit(): void {
    this.initForm()
  }

  ajoutnew(){
    const formData : FormData = new FormData();
    const userOject = {
      nom: this.inscriptionForm.value.nom,
      prenom: this.inscriptionForm.value.prenom,
      matricule: this.inscriptionForm.value.matricule,
      password: this.inscriptionForm.value.password,
      email: this.inscriptionForm.value.email,
      telephone: this.inscriptionForm.value.telephone
    }
    formData.append("utilisateur",JSON.stringify(userOject));
    console.log(this.inscriptionForm.value);
    
    
    // const roleObject = {role: this.inscriptionForm.value.role.roleObject}

    // ken fema mochkol fil creation m loul : this.inscriptionForm.value.role.roleObject  f ligne li lota rodha  this.inscriptionForm.value.role  w ba3ed raja7a kima kanit (seulement pour la creation du 1er user)
    formData.append("role", JSON.stringify(this.inscriptionForm.value.role.roleObject));
    console.log(userOject);
    
    
    
    
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir continuer ?',
      accept: () => {
        this.userService.createUtilisateur(formData).subscribe(
          (res)=>{
            console.log(res);
            this.route.navigate(['/admin/view-list-utilisateurs'])
          }
        )
       
          //Actual logic to perform a confirmation
      }
  });
    
  }
/*
  inputForm!:FormGroup;
  constructor(private fb:FormBuilder,private route:Router,private userService:UtilisatuersService){}



  // ngOnInit(): void {
  //   this.inputForm=this.fb.group(
  //     {  "nom":["",Validators.required],
  //        "prenom":["",Validators.required],
  //        "telephone":["",Validators.required],
  //        "email":["",Validators.required],
  //        "matricule":["",Validators.required],
        
  //        "motDePasse":["",Validators.required]

  //     }
  //   )
  // }

  addUser(){
    console.log(this.inputForm.controls['nom'].value)
    console.log(this.inputForm.controls['prenom'].value)
    console.log(this.inputForm.controls['telephone'].value)
    console.log(this.inputForm.controls['email'].value)
    console.log(this.inputForm.controls['matricule'].value)
    console.log(this.inputForm.controls['motDePasse'].value)


    if(this.inputForm.valid)
    {
      console.log("formulaire valide");
      this.route.navigate(['/admin/view-list-utilisateurs']);
    }
    else{
      console.log("formulaire invalide")
    }
  let user=new Utilisateur();
  user.nom=this.inputForm.controls['nom'].value
  user.prenom=this.inputForm.controls['prenom'].value
  user.telephone=this.inputForm.controls['telephone'].value
  user.email=this.inputForm.controls['email'].value
  user.matricule=this.inputForm.controls['matricule'].value
  user.motDePasse=this.inputForm.controls['motDePasse'].value
  
  this.userService.createUtilisateur(user).subscribe(
    (res)=>{
      console.admin(res)
    }
  )
 
  }
   */

  initForm(){
    this.inscriptionForm = this.fb.group({
      nom: ["", Validators.required],
      prenom: ["", Validators.required],
      matricule: ["", Validators.required],
      email:["", Validators.required],
      telephone: ["", Validators.required],
      password: ["", Validators.required],
      role: [this.rolesOptions[0].roleObject, Validators.required]
    })
  }


}
