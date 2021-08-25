import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/models/Movie';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  params : any;
  id : any;
  model : Movie = {
    name: '',
    id : 0,
    details : ''
  }
  modelEdit = {
    name : "",
    details : "",
    id : 0
  }
  showEdit : boolean = false;
  constructor(private route : ActivatedRoute, private http : HttpClient) { }

  ngOnInit(): void {
    this.params = this.route.params.subscribe(params => {
      this.id = params['id']
      this.getMovie()
    })
  }

  URL : string = "https://localhost:44353/api/Movies"
  getMovie() {
    this.http.get<any> ( this.URL+`/${this.id}`).subscribe(
      (res : Movie) => {
        this.model = res;
        this.modelEdit.name = res.name;
        this.modelEdit.details = res.details;
        this.modelEdit.id = res.id

      }
    )
  }

  editMovie() {
    this.http.put<any>((this.URL + `/${this.id}`), this.modelEdit).subscribe(
      (res : any) => {
        alert(`Movie changed Successfully`)
        this.getMovie()

      }
    )
  }

  onEdit() {
    if(this.showEdit) {

    }
  }

}
