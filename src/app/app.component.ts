import { Component } from '@angular/core';
import { fadeOut, blub} from './animations/template.animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
   'header/header.component.css'],
   animations: [fadeOut, blub],
})
export class AppComponent {
  title = 'cardio-4tn';
}
