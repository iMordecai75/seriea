import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { MatchesDayComponent } from './components/matches-day/matches-day.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { HomeComponent } from './components/home/home.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { FormMatchDayComponent } from './components/form-match-day/form-match-day.component';
import { UsersrankingComponent } from './components/usersranking/usersranking.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    FormComponent,
    NavComponent,
    MatchesDayComponent,
    ReplacePipe,
    HomeComponent,
    RankingComponent,
    FormMatchDayComponent,
    UsersrankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

