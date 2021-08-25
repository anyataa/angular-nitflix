import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomerService } from '../services/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor( private customerService : CustomerService) { }
  dtOptions : DataTables.Settings = { lengthMenu : [5 , 10, 15]}
  dtTrigger : Subject<any> = new Subject<any>();

  customerList : any = [];
  ngOnInit(): void {
    this.getCustomer()
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe()

  }

  getCustomer() {
    this.customerService.getCustomer().subscribe(res => {
      this.customerList = res;
      this.dtTrigger.next()
    })
  }

  onDelete(id : number){
    if(confirm("Are you sure you want to delete?")) {
      this.customerService.deleteCustomer(id)
      .subscribe(res => {
        this.customerService.getCustomer()
        .subscribe( res => {
         window.location.reload()
        })
      })
    }
  }
}
