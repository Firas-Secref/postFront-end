import { Component } from '@angular/core';
import { Planning } from 'src/app/classes/planning';
import {Projet} from "../../classes/projet";

@Component({
  selector: 'app-listeprojets',
  templateUrl: './listeprojets.component.html',
  styleUrls: ['./listeprojets.component.scss']
})
export class ListeprojetsComponent {
  planning:Planning=new Planning();

  updatePopup(projet:Planning){
    this.planning=projet;
    this.display=true;

  }
  plannings: Planning[] = [
    {
      id:1,
    programmeBesoin: 1,
    sujet:"test",
    contexteBesoin:"test",
    besoin:"testte"

    },
    {
      id:2,
    programmeBesoin: 2,
    sujet:"test222",
    contexteBesoin:"test222",
    besoin:"testt2222e"

    }
    

  ];
  display: boolean = false;

    showDialog() {
        this.display = true;
    }

}
