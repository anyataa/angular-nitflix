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
  option = {
    name : "Membership Type Options",
    id : 0
  }

  model = {
    name: "",
    dateOfBirth  : "",
    isSubscribedToNewsLetter :  false,
    MembershipTypeId : 0
  }
  constructor(
    private membershiptService : MembershipTypeService
    , private datepipe: DatePipe,
    private customerService : CustomerService ) { }

  ngOnInit(): void {
    this.getMembership()

  }

  getMembership() {
    this.membershiptService.getMembershipType().subscribe( (res) => {
      this.memberList = res;
    })
  }

  chooseMember(index : number) {
    this.option.name = this.memberList[index].membershipTypeName
    this.option.id = this.memberList[index].id
    this.model.MembershipTypeId = this.memberList[index].id

  }

  onSubmit() {
    this.customerService.addCustomer(this.model).subscribe(
      (res) => {
        alert(`Successfully added `)

      })
  }

  onClickCheck(){
    this.model.isSubscribedToNewsLetter = !this.model.isSubscribedToNewsLetter;
  }
}
