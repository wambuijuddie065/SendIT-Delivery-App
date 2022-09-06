import { Component, OnInit } from '@angular/core';
import { ParcelInterface } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  parcelsArr:ParcelInterface[]=[{
    to:'Judy Wambui',
    contact:'0712345678',
    location:'Nyeri',
    parcel_id:'45678',
    description:'dfghjkl',
    status:'dispatched'


  }]

  constructor() { }

  ngOnInit(): void {
  }

}
