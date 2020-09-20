import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpressionListComponent } from './dictionary/expression-list/expression-list.component';
import { HomeComponent } from './home/home.component';
import { TestListComponent } from './dictionary/test-list/test-list.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path : 'home', component: HomeComponent},
  {path : 'dictionary', component: ExpressionListComponent},
  {path : 'test', component: TestListComponent}

  // {path : 'users', component: UserListComponent},
  // {path : 'account', component: AccountComponent},
  // {path : 'dictionary', component: ExpressionListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
