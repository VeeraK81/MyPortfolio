import { Component, OnInit } from '@angular/core';
import { CentralisedDataService } from 'src/app/shared/services/centralised-data.service';
import { DictionaryDataService } from 'src/app/shared/services/dictionary-data.service';
import { WordReference } from './../../models/word-reference';




@Component({
  selector: 'app-expression-list',
  templateUrl: './expression-list.component.html',
  styleUrls: ['./expression-list.component.css']
})
export class ExpressionListComponent implements OnInit {

  public dicData = [];

  dicDataFilter: WordReference[];




  constructor(private cdservice: CentralisedDataService, private dData: DictionaryDataService) {

    cdservice.changeMessage("Dictionary");

    dData.getData().subscribe(data=>  {
    this.dicData = data;
    console.log(data.length+"------------data length--->");
  });



  }


  ngOnInit(): void {
    console.log(this.dicData.length+"--------------->");
  }

  // search(text: string, pipe: PipeTransform): WordReference[] {
  //   return this.dicData.filter(country => {
  //     const term = text.toLowerCase();
  //     return country.french.toLowerCase().includes(term)
  //         || pipe.transform(country.english).includes(term);
  //   });
  // }





}
