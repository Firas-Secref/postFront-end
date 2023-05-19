import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  direction = localStorage.getItem("role") ==="Direction d'achat divers"|| 
              localStorage.getItem("role") ==="Direction d'achat de travaux et batiment"||
              localStorage.getItem("role") ==="direction d'achat informatique"
  
  admin = localStorage.getItem("role") ==="ADMINISTRATEUR"

  ordonnateur = localStorage.getItem("role") ==="Ordonnateur"
  planification = localStorage.getItem("role") ==="direction de planification et budget"


  constructor(){
    // this.userRole = localStorage.getItem("role")!
  }
}
