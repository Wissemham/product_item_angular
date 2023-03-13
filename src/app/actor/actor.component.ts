import { Actor } from './../actor';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent {
  @Input() actor!: Actor;
  @Output() deleteActor = new EventEmitter<void>();
}
