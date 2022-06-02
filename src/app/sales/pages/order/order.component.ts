import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent   {

  isMajus:boolean = false;
  heroes: Heroe[] = [
    {
      name: 'Superman',
      flying: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      flying: false,
      color: Color.black
    },
    {
      name: 'Robin',
      flying: false,
      color: Color.green
    },
    {
      name: 'Daredevil',
      flying: false,
      color: Color.red
    },
    {
      name: 'Green lantern',
      flying: true,
      color: Color.green
    },
  ]

  orderBy: string = '';
  
  changeMajus(){
    this.isMajus = !this.isMajus;
  }

  changeOrder( value: string ){
    this.orderBy = value;
  }


}
