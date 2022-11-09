import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-boilerplate';
  description = 'this is a description';
  showDescription = false;
  catNames = ['Puciņa', 'muris', 'pikselis'];

  ngOnInit(): void {
    console.log('Komponenete izveidojās', this.description);
  }

  sayHello(): void {
    console.log('Hello');
  }

  toggleDescription(): void {
    this.showDescription = !this.showDescription;
  }
}
