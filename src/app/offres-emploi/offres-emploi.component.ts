import { Component } from '@angular/core';
import { Emploi } from '../core/model/Emploi';



@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent {

  listEmploi:Emploi[]=[
    {reference: "1", title: "T-shirt 1", entreprise: "warda", etat: true},
    {reference: "2", title: "T-shirt 2", entreprise: "vitalait", etat: false},
    {reference: "3", title: "T-shirt 3", entreprise: "delice", etat: true}, ]
 entrep !: string;
   nbr !: number;

    postuler(){}

  

    Bilan(){
      this.nbr=0;
for (let index = 0; index < this.listEmploi.length; index++) {
  if(this.listEmploi[index].etat==true){
    this.nbr++;
  } 
}
return this.nbr;
    }


}
