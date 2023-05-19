import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisatuersService } from 'src/app/admin/utilisatuers.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userFullname: string = ""
  roleName=""
  constructor(private userService: UtilisatuersService, private route: Router){}
  ngOnInit(): void {
    this.userService.getByIdUtilisateur(parseInt(localStorage.getItem("userId")!)).subscribe((user: any)=>{
      
      this.roleName = localStorage.getItem("role")!
      this.userFullname = `${user.nom} ${user.prenom}`      
    })
  }

  logout(){
    localStorage.clear()
    this.route.navigate(['/auth/login']);
  }

}
