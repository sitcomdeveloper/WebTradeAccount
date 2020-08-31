import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './index/home/home.component';
import { AccountComponent } from './index/home/account/account.component';
import { DemoaccountComponent } from './index/home/demoaccount/demoaccount.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component: HomeComponent},
  {path:'account',component: AccountComponent},
  {path:'demoaccount',component: DemoaccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
