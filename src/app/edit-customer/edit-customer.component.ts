import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MembershipTypeService } from '../services/membership-type/membership-type.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  params : any;
  id : string = "";

  constructor(private membershipTypeService : MembershipTypeService, private route : ActivatedRoute) {
    this.params = this.route.params.subscribe( content => {
      this.id = content.id;
    })

  }

  ngOnInit(): void {
  }

  getMembershipTypeDetailSingle(){
    this.membershipTypeService.getMembershipTypeSingle
  }
}
