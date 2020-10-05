import { Component, OnInit } from '@angular/core';
import { CentralisedDataService } from 'src/app/shared/services/centralised-data.service';
import {MatGridListModule} from '@angular/material/grid-list';
import { getTestBed } from '@angular/core/testing';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'PRODUCTS', cols: 3, rows: 3, color: '#f4a261' },
    {text: 'SERVICES', cols: 1, rows: 6, color: '#e9c46a'},
    {text: 'OUTSOURCING', cols: 1, rows: 3, color: '#2a9d8f'},
    {text: 'DATA ANALYTICS', cols: 2, rows: 3, color: '#264653'},
  ];


  constructor(private cdservice: CentralisedDataService,  private route: ActivatedRoute, private router: Router) {

    cdservice.changeMessage("IT Solution");
  }

      ngOnInit(): void {
  }

  getTile($event){

    this.router.navigate(['itsolution/products']);
  }



}
