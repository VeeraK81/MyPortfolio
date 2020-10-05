import { DictionaryDataService } from 'src/app/shared/services/dictionary-data.service';

import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CentralisedDataService } from 'src/app/shared/services/centralised-data.service';





export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface WordReference {

  french: string;
  english: string;
}

// const ELEMENT_DATA: WordReference[] = [];

// const data: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];


@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements AfterViewInit {


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSourceData: any = [];
  // ELEMENT_DATA: WordReference[] = [];
  displayedColumns: string[] = ['id', 'french', 'english'];
  dataSource = new MatTableDataSource(this.dataSourceData);

  resultLength: Number = 0;

  constructor(private cdservice: CentralisedDataService, private dData: DictionaryDataService) {

    cdservice.changeMessage("Dictionary");

    dData.getJsonData().subscribe(data=>  {
      this.dataSource =  new MatTableDataSource(data);
      this.resultLength = data.length;
    });


  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
