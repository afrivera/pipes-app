import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  nameLower: string = 'andres';
  nameUpper: string = 'ANDRES';
  completeName: string = 'AndReS RiVeRA';

  actualDate: Date = new Date();

}
