import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'jquery';
import { Customer } from '../models/customer/customer.model';
import { MembershipType } from '../models/membership-type/membership-type.model';
import { CustomerService } from '../services/customer/customer.service';
import { MembershipTypeService } from '../services/membership-type/membership-type.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  params : any;
  editMessage : string = "Edit"
  isEditMessage : boolean = false
  showEdit = "none"
  id : number = 0;
  memberId : string = "";
  customer : Customer = {id : 0, name : "", membershipTypeId : 0, dateOfBirth : ""}
  membership : MembershipType = { id : 0, membershipTypeName : "", signUpFee : 0, durationInMonths: 0, discountRate: 0}

  constructor(
    private membershipTypeService : MembershipTypeService,
     private route : ActivatedRoute,
     private customerService : CustomerService) {
    this.params = this.route.params.subscribe( content => {
      this.id = content.id;
      this.memberId = content.member
    })
    this.getMembershipTypeDetailSingle()
    this.getCustomerSingle()


  }

  ngOnInit(): void {
  }

  getMembershipTypeDetailSingle(){
    this.membershipTypeService.getMembershipTypeSingle(this.memberId)
    .subscribe((res : any) => {
      this.membership.membershipTypeName = res.membershipTypeName
      this.membership.signUpFee = res.signUpFee
      this.membership.durationInMonths = res.durationInMonths
      this.membership.discountRate = res.discountRate
    })
  }

  getCustomerSingle() {
    this.customerService.getCustomerSingle(this.id)
    .subscribe((res : any) =>  {
      this.customer.id = res.id
      this.customer.name = res.name
      this.customer.dateOfBirth = res.dateOfBirth
      this.customer.membershipTypeId = res.membershipTypeId
    })
  }

  changeEditMessage() {
    this.isEditMessage = !this.isEditMessage
    if(this.isEditMessage){
      this.editMessage = "Close"
      this.showEdit = "block"
    } else {
      this.editMessage = "Edit"
      this.showEdit = "none"
    }
  }
  onSubmit(){
    this.customerService.updateCustomer( this.id ,this.customer)
    .subscribe((res : any) => {
      console.log(res)
      if(res != null) {
         alert(`${res.name} successfuly changed!`)
      } else {
        alert('something went wrong! please check your connection and try again.')
      }
    })
  }
}
