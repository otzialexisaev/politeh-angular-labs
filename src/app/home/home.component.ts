import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items: string[] = ['Параметр 1', 'Параметр 2', 'Параметр 3', 'Параметр 4'];
  condition: boolean = true;
  toggle() {
    this.condition = !this.condition;
  }
}
