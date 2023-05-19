import { Component, OnInit } from '@angular/core';
import { CalendrierService } from '../calendrier.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-projet-encour',
  templateUrl: './details-projet-encour.component.html',
  styleUrls: ['./details-projet-encour.component.scss']
})
export class DetailsProjetEncourComponent implements OnInit {

    id: number
    detailsProjet!: any
    constructor(private calendrierService: CalendrierService, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.id=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    this.getDetails(this.id)
  }

  getDetails(id: number){
    this.calendrierService.getById(id).subscribe((data: any)=>{
      console.log(data);
      this.detailsProjet = data
      
    })
  }

}
