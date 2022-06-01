import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent {

  // i18nSelect
  name: string= 'Andres';
  gender: string = 'male';

  invitationMapping = {
    'male': 'him',
    'female': 'her'
  }

  // i18nPlural
  clients: string[] = ['maria', 'peter', 'john', 'clark', 'bruce'];
  clientsMap = {
  '=0': 'we don\'t have clients waiting',
  '=1': 'we have a client waiting.',
  '=2': 'we have two clients waiting.',
  'other': 'we have # clients waiting'
  }

  // slice pipe
  changeClient(){
    if(this.gender === 'male'){
      this.gender = 'female';
      this.name = 'andrea'
      return;
    } else if(this.gender === 'female'){
      this.gender = 'male';
      this.name = 'andres';
      return;
    }
    
  }

  deleteClient(){
    if( this.clients.length === 0) return;
    this.clients.shift();
  }

  // keyValue Pipe
  person = {
    name: 'andres',
    age: 31,
    city: 'cali'
  }

  // json pipe
  heroes = [
    {
      name: 'superman',
      flying: true
    },
    {
      name: 'Robin',
      flying: false
    },
    {
      name: 'Aquaman',
      flying: false
    },
  ]

  // async pipe
  myObservable = interval( 1000 );

  valuePromise = new Promise( (resolve, reject)=> {
    setTimeout(() => {
      resolve( 'end of the promise');
    }, 3000);
  });

}
