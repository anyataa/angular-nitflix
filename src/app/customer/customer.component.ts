import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor( private customerService : CustomerService) { }
  customerList : any = [];
  ngOnInit(): void {
    this.getCustomer()
  }

  getCustomer() {
    this.customerService.getCustomer().subscribe(res => {
      this.customerList = res;

    })
  }

}
