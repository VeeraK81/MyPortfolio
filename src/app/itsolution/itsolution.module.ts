import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductsComponent } from './products/products.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  declarations: [DashboardComponent, ProductsComponent],
  imports: [
RouterModule.forChild(routes),
    CommonModule,
    MatGridListModule,
    MDBBootstrapModule
  ],
  exports: [RouterModule]
})
export class ItsolutionModule { }
