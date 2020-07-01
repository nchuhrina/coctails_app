import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drinks',
  template: `<header> <img src="./Title.png" alt="Drinks"/><nav></nav></header>`,
  styles: ['header { height: 100px; border: 1px gray solid; width:100%; background-color: azure; display: flex} nav{}']
})
export class DrinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

