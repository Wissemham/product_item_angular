import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-to-euro-convert',
  templateUrl: './to-euro-convert.component.html',
  styleUrls: ['./to-euro-convert.component.css']
})
export class ToEuroConvertComponent {
  @Input() dinarAmount!:number;
  euroAmount!:number;
  @Output() euroAmountChanged = new EventEmitter<number>();

  ngOnChanges(){
    this.euroAmount = this.dinarAmount * 0.002;
    this.euroAmountChanged.emit(this.euroAmount);
  }
}
