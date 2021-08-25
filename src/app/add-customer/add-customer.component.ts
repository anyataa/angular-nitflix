import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer/customer.model';
import { MembershipType } from '../models/membership-type/membership-type.model';
import { CustomerService } from '../services/customer/customer.service';
import { MembershipTypeService } from '../services/membership-type/membership-type.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  memberList : any = [];
  option : string = "Membership Type Options"

  model = {
    name: "",
    dateOfBirth  : "",
    isSubscribedToNewsLetter :  false
  }
  constructor(
    private membershiptService : MembershipTypeService
    , public datepipe: DatePipe,
    private customerService : CustomerService ) { }

  ngOnInit(): void {
    this.getMembership()

  }

  getMembership() {
    this.membershiptService.getMembershipType().subscribe( (res) => {
      console.log(res)
      this.memberList = res;
      console.log(this.model)
    })
  }

  chooseMember(index : number) {

    this.option = this.memberList[index].membershipTypeName

  }

  onSubmit() {
    console.log(this.model)
    this.customerService.addCustomer(this.model).subscribe(
      (res) => {
        alert(`Successfully added `)

      })
  }

  onClickCheck(){
    this.model.isSubscribedToNewsLetter = !this.model.isSubscribedToNewsLetter;
    console.log(this.model.isSubscribedToNewsLetter)
  }
}
