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

   deleteCustomer(id : number) {
     return this.http.delete(this.URL + `/${id}`)
   }

   getCustomerSingle(customerId : number) {
     return this.http.get(this.URL + `/${customerId}`)
   }

   updateCustomer(customerId : number, customerModel : Customer) {
     return this.http.put(this.URL+`/${customerId}`, customerModel)
   }
}
