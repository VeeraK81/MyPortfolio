import { Component, OnInit } from '@angular/core';
import { CentralisedDataService } from './shared/services/centralised-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myportfolio';
  page_nav: string;

  constructor(private cdservice: CentralisedDataService){
    cdservice.currentNav.subscribe(data => this.page_nav = data);
  }

  ngOnInit(): void {
    // this.page_nav = this.cdservice.page_nav;
    // console.log(this.cdservice.page_nav);

  }
}
