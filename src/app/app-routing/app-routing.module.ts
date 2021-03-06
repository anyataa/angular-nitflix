import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from '../movies/movies.component';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { EditMovieComponent } from '../edit-movie/edit-movie.component';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { CustomerComponent } from '../customer/customer.component';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';



const routes : Routes = [
  { path : 'add' , component: AddMovieComponent},
  { path : '' , component: MoviesComponent},
  { path : 'detail/:id', component: EditMovieComponent },
  { path: 'becomeMember', component: AddCustomerComponent},
  { path : 'allMember', component: CustomerComponent },
  { path : 'editCustomer/:id/:member', component : EditCustomerComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]

})
export class AppRoutingModule { }
