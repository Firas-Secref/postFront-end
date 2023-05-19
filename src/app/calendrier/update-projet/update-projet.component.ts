import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { from } from 'rxjs';
import { __param } from 'tslib';
import { CalendrierService } from '../calendrier.service';
import { Projet } from '../projet';
import { NatureProjet } from '../nature-projet';
import { RegionService } from '../region.service';
import { NatureprojetService } from '../natureprojet.service';
import { Region } from '../region';
import { DirectionAchatService } from '../direction-achat.service';
import { DirectionAchat } from '../direction-achat';
import { TypeAchat } from '../type-achat';
import { TypeAchatService } from '../type-achat.service';

@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.scss']
})
export class UpdateProjetComponent implements OnInit{
  id!:any;
  projetupdate:any = new Projet();
  projetList:Projet[]=[];
  regionList:Region[]=[];
  natureProjetList:NatureProjet[]=[];
  directionAchatList:DirectionAchat[]=[];
  typeAchatList:TypeAchat[]=[];
  activeIndex=0;
  constructor(
    private route:Router,
    private activatedRoute:ActivatedRoute,
    private calendrierService:CalendrierService,
    private regionService:RegionService,
    private  natureProjetService:NatureprojetService,
    private directionAchatService:DirectionAchatService,
    private typeAchatService:TypeAchatService){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.calendrierService.getById(this.id).subscribe(res=>{
      this.projetupdate=res;
      this.projetupdate.dateAgrementSpecifications = new Date(res.dateAgrementSpecifications).toISOString().substring(0, 10)
      this.projetupdate.dateNegociation = new Date(res.dateNegociation).toISOString().substring(0, 10)
      this.projetupdate.dateOuvertureSoumission = new Date(res.dateOuvertureSoumission).toISOString().substring(0, 10)
      this.projetupdate.dateTransmissionComite = new Date(res.dateTransmissionComite).toISOString().substring(0, 10)
      this.projetupdate.dateReponseCommite = new Date(res.dateReponseCommite).toISOString().substring(0, 10)
      
      this.getRegion();
      this.getNatureProjet();
      this.getDirectionAchat();
      this.getTypeAchat();
    })
        }
      
  update() {
    this.calendrierService.updateProjet(this.id,this.projetupdate).subscribe(res=>{
      this.route.navigate(['/calendrier/view-list'])
    })
    
  }

  getRegion(){

    this.calendrierService.getAllRegion().subscribe(data=>{
      this.regionList=data;
    })
    
  }

  getNatureProjet(){
    this.natureProjetService.getAllNatureProjet().subscribe(data=>{
      this.natureProjetList=data;
    })
  }


  getDirectionAchat(){
    this.directionAchatService.getAllDirectionAchat().subscribe(data=>{
      this.directionAchatList=data;
    })
  }



  getTypeAchat(){
    this.typeAchatService.getAllTypeAchat().subscribe(data=>{
      this.typeAchatList=data;
      console.log(data);
      
    })
  }

  }
