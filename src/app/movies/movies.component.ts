import { Component, OnInit } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Movie } from 'src/models/Movie';
import { DataTablesModule } from 'angular-datatables';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  dtConfig : DataTables.Settings = { lengthMenu : [5, 10, 25,50]}
  dtTrigger : Subject<any> = new Subject<any>();
  resData : any;
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getMovie();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  URL : string = "https://localhost:44353/api/Movies"
  getMovie() {
    this.http.get<any> ( this.URL).subscribe(
      res => {
        this.resData = res;
        this.dtTrigger.next()
      }
    )
  }

  deleteMovie(id : number) {
    this.http.delete(this.URL + `/${id}`).subscribe(
      res =>  {
        console.log(res)
        if(!res){
          this.getMovie();

        }
      })
  }

  onDelete(id : number) {
    console.log(id)
    if(confirm("Are You Sure Want to Delete the Movie?")) {
      this.deleteMovie(id)
    }
  }



}

