import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentralisedDataService } from './services/centralised-data.service';
import { DictionaryDataService } from './services/dictionary-data.service';
import { MatTableModule } from '@angular/material/table';





@NgModule({
  declarations: [],
  imports: [
CommonModule,
  MatTableModule
  ],
  providers: [CentralisedDataService, DictionaryDataService],
})
export class SharedModule { }
