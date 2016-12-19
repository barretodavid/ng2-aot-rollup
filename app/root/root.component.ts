import { 
  Component, 
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'rio-root',
  templateUrl: 'root.component.html',
  styleUrls: ['root.component.css']
})
export class RootComponent {
  myTitle = 'My great title 2';
}