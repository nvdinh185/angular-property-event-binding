import { Component } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent {
  en = "Hello";
  vn = "Xin chao";
  imageUrl = "https://angular.io/assets/images/logos/angular/shield-large.svg";
  forgot = true;

  toggleForgot() {
    this.forgot = !this.forgot;
  }

}
