import { Component, Input, OnInit } from '@angular/core';
import { Planning } from 'src/app/classes/planning';
import { ProgrammeBesoin } from 'src/app/classes/programme-besoin';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  
  display: boolean = false;
  @Input() planning!: Planning;
  programmesBesoin: ProgrammeBesoin[] = [];

  ngOnInit(): void {
    this.programmesBesoin = [
      {
        id: 1,
        label_fr: 'programme  1'
      },
      {
        id: 2,
        label_fr: 'programme 2'
      }
    ]
  }

  showDialog() {
      this.display = true;
  }


}
