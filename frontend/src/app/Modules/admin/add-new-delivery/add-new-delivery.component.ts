import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ParcelInterface } from 'src/app/Interfaces/interfaces';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-add-new-delivery',
  templateUrl: './add-new-delivery.component.html',
  styleUrls: ['./add-new-delivery.component.css']
})
export class AddNewDeliveryComponent implements OnInit {

  newParcelForm!:FormGroup
  
  from!:string
  to!:string
  email!:string
  contact!:string
  delivery!:string
  parcel_id!:string
  description!:string
  weight!:string
  
  status!:string
  

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
this.newParcelForm=new FormGroup({
  from:new FormControl(null),
  to:new FormControl(null),
 
  contact:new FormControl(null),
  email:new FormControl(null),
  delivery:new FormControl(null),
  parcel_id:new FormControl(null),
  description:new FormControl(null),
  weight:new FormControl(null),
  status:new FormControl(null)
  
})

  }
  onAdd(){
    const newParcel:ParcelInterface=this.newParcelForm.value
    this.adminService.addParcel(newParcel).subscribe((response)=>{
      console.log(response);
      

    })
    
    this.newParcelForm.reset()
    
  }

}
