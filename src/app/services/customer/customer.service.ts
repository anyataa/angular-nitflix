import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/models/customer/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  URL : string = "https://localhost:44353/api/Customers"

  constructor( private http : HttpClient) {
   }

   getCustomer() {
    return this.http.get(this.URL)
   }

   addCustomer(customerModel : any) {
    return this.http.post(this.URL, customerModel)
   }
}
