import { Component } from '@angular/core';

@Component({
  selector: 'app-convertisseur',
  templateUrl: './convertisseur.component.html',
  styleUrls: ['./convertisseur.component.css']
})
export class ConvertisseurComponent {
  dinarAmount!: number;
  euroAmount!: number;

  onEuroAmount(euroAmount:number){
    this.euroAmount = euroAmount;
  }
}
