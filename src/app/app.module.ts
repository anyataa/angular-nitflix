import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    AddMovieComponent,
    NavbarComponent,
    EditMovieComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
