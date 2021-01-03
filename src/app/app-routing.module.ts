import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormMatchDayComponent } from './components/form-match-day/form-match-day.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-ranking', component: FormComponent, canActivate: [LoginGuard] },
  { path: 'update-results', component: FormMatchDayComponent, canActivate: [LoginGuard] },
  {
    path: 'logout',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
