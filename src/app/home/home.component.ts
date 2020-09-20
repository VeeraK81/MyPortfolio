import { Component, OnInit } from '@angular/core';
import { CentralisedDataService } from './../shared/services/centralised-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cdservice: CentralisedDataService) {
    this.cdservice.changeMessage("Home");
  }

  ngOnInit(): void {

  }

}
