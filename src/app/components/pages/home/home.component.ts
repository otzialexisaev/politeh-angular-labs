import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items: string[] = [];
  toAdd: string = "";
  condition: boolean = true;
  toggle() {
    this.condition = !this.condition;
  }
  addItem() {
    if (this.toAdd !== "") {
      this.items.push(this.toAdd);
    }
  }
}
