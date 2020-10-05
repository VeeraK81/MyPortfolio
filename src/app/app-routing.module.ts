import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestListComponent } from './dictionary/test-list/test-list.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path : 'home', component: HomeComponent},
  {path : 'dictionary', component: TestListComponent},
  {path : 'contact', component: ContactComponent},
  // {path : 'test', component: ExpressionListComponent},
  // {path : 'testnew', component: TestnewComponent },
  // tslint:disable-next-line: max-line-length
  { path: 'itsolution', loadChildren: () => import('./itsolution/itsolution.module').then(m => m.ItsolutionModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
