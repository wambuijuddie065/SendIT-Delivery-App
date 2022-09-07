import { Component, OnInit } from '@angular/core';
import { ParcelInterface } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  parcelsArr:ParcelInterface[]=[{
    to:'',
    contact:'',
    location:'',
    parcel_id:'',
    description:'',
    status:''


  }]

  constructor() { }

  ngOnInit(): void {
  }

}
