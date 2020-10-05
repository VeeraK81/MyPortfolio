import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpressionListComponent } from './expression-list/expression-list.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TestListComponent } from './test-list/test-list.component';
import { AppmaterialModule } from '../shared/appmaterial/appmaterial.module';
import { TestnewComponent } from './testnew/testnew.component';




@NgModule({
  declarations: [ExpressionListComponent, TestListComponent, TestnewComponent],
  imports: [
CommonModule,
  MatTableModule,
  AppmaterialModule
  ]
})
export class DictionaryModule { }
