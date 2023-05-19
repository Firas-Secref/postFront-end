import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  inputForm!:FormGroup;
  helper = new JwtHelperService()

  constructor(private fb:FormBuilder,private route:Router, private loginService: LoginService){}
  ngOnInit(): void {
  
    this.inputForm=this.fb.group(
    {
      matricule:["",Validators.required],
      password:["",Validators.required]
    }
  )
  }


  onsubmit(){

    console.log(this.inputForm.value)


    if(this.inputForm.valid)
    {
      this.loginService.login(this.inputForm.value).subscribe((res: HttpResponse<any>)=>{
        const jwt = res.headers.get("Authorization")
        const decodedJWT = this.helper.decodeToken(jwt)
        localStorage.setItem("jwt",jwt)
        localStorage.setItem("role",decodedJWT.roles[0])

        console.log(decodedJWT);
      
        localStorage.setItem("userId", decodedJWT.idUser)
        this.route.navigate(['/statistique']);
        
      })

    }
    else{
      console.log("formulaire invalide")
    }
  }







}
