import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ParcelInterface } from 'src/app/Interfaces/interfaces';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-add-new-delivery',
  templateUrl: './add-new-delivery.component.html',
  styleUrls: ['./add-new-delivery.component.css'],
})
export class AddNewDeliveryComponent implements OnInit {
 

  // from!: string;
  // to!: string;
  // email!: string;
  // contact!: string;
  // delivery!: string;
  // parcel_id!: string;
  // description!: string;
  // weight!: string;

  // status!: string;

  constructor(private adminService: AdminService, private fb: FormBuilder) {}
  createParcelForm!: FormGroup;

  ngOnInit(): void {
    this.createParcelForm = this.fb.group({
      sender_details: [null, [Validators.required]],
      receiver_details: [null, [Validators.required]],
      parcel_id: [null, [Validators.required]],
      description: [null, [Validators.required]],
      weight: [null, [Validators.required]],
      status: [null, [Validators.required]],
    });
  }
  onAdd() {
    const newParcel = this.createParcelForm.value;

    console.log(this.createParcelForm.value);

    this.adminService.addParcel(newParcel).subscribe((response)=>{
      this.adminService.getParcels()
    })

  }
}
