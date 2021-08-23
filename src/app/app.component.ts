import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'questAngular10';

  onomatopoeias: string[] = [];

  onReceiveNewOnomatopia(name: string) {
    this.onomatopoeias.push(name);
  }

}
