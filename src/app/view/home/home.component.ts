import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  content={title:'FEATURED UPCOMING RACE',span:'RAS AL KHAIMAH 2020'};
  boxes=[{bgcolor1:'AboutWARRIORS'},{bgcolor1:'Latest Projects'},{bgcolor1:'OurSERVICES'},{bgcolor1:'CONTACTUS'}]

  constructor() { }

  ngOnInit(): void {
  }

}
