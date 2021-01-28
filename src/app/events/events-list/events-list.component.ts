import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '10/12/22',
    time: '10:00',
    price: 599.99,
    location: {
      address: 'STM Canary',
      city: 'CDMX',
      country: 'Mexico'
    }
  }

  handleEventClicked() {
    console.log('recived: ', this.event1.name);
  }

}
