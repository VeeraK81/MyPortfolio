import { Component, OnInit } from '@angular/core';
import { CentralisedDataService } from 'src/app/shared/services/centralised-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private cdservice: CentralisedDataService) {
    cdservice.changeMessage("IT Solution | Products ");
   }

  ngOnInit(): void {
  }

}
