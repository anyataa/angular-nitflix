import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembershipTypeService {

  URL : string = "https://localhost:44353/api/MembershipTypes"
  constructor(private http : HttpClient) { }

  getMembershipType() {
    return this.http.get(this.URL)
  }

  getMembershipTypeSingle(memberId : string) {
    return this.http.get(this.URL + `/${memberId}`)
  }
}
