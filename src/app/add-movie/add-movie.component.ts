import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Movie } from 'src/models/Movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})

export class AddMovieComponent implements OnInit {
  name: string = "";

  constructor(private http: HttpClient) { }
  ngOnInit(): void {

  }

  model =  {
    name: "",
    details: ""
  }

  onSubmit() {
    this.postMovie()
  }

  URL : string = "https://localhost:44353/api/Movies"
  postMovie() {
    this.http.post(this.URL, this.model).toPromise().then( (res : any) => {
       if(res.name) {
         alert(`${res.name} Added Successfuly!`)
       } if(res.status) {
         alert("Sorry, something unexpected happen. Please check your internet connection")
       }
    })
  }
}
