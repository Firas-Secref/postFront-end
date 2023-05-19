import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FicheprojetService } from '../ficheprojet.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.scss']
})
export class UpdateProjetComponent implements OnInit {
 id!:any;
 ficheupdate:any;
 activeIndex=0;

  constructor (
    private activatedRoute:ActivatedRoute,
    private ficheprojet:FicheprojetService,
    private router:Router,
    private confirmationService: ConfirmationService
    ){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.ficheprojet.getById(this.id).subscribe(res=>{
      console.log('res 22' , res)
      this.ficheupdate=res;
    })
  }
  updatefiche(){


    

    
    

    this.ficheprojet.updateFiche(this.id,this.ficheupdate).subscribe((res: any)=>{
      console.log(res);
      
      this.router.navigate(['/fichedeprojet/view-list'])
    })
  }


}
