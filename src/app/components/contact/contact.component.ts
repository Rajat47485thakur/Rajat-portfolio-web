import {Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/rajat-thakur-226b14223/', '_blank');
  }

  get email(): string {
    return 'rajatthakur72188@gmail.com';
  }
}
