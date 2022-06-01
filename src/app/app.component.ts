import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name: string = 'Andres';
  value: number = 1000; 
  obj = {
    name: 'Felipe'
  }

  constructor( private primeNgConfig: PrimeNGConfig){

  }

  // splash on fieldSet
  ngOnInit(): void {
    this.primeNgConfig.ripple = true;
  }

  showName(){
    console.log(this.name)
    console.log(this.value)
    console.log(this.obj)
  }
}
