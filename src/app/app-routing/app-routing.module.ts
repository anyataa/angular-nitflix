import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from '../movies/movies.component';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { EditMovieComponent } from '../edit-movie/edit-movie.component';



const routes : Routes = [
  { path : 'add' , component: AddMovieComponent},
  { path : '' , component: MoviesComponent},
  { path : 'detail/:id', component: EditMovieComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]

})
export class AppRoutingModule { }
