import { Actor } from './../actor';
import { Component } from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {
  listActors: Actor[] = [
    new Actor('Robert', 'Julia'),
    new Actor('Walker', 'Paul'),
    new Actor('Pitt', 'Brad')
  ];

  onDeleteActor(actor: Actor) {
    const index = this.listActors.indexOf(actor);
    if (index !== -1) {
      this.listActors.splice(index, 1);
    }
  }

}
