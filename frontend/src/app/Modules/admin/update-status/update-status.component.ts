import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminService } from 'src/app/Services/admin.service';
import { getParcel, getparcel_id, ParcelState } from '../AdminStates/parcel.reducer';
import * as ParcelActions from '../AdminStates/parcel.action'
import { ParcelInterface } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent implements OnInit {

  constructor(private router:Router ,private adminService: AdminService,private route:ActivatedRoute, private fb: FormBuilder,private store:Store<ParcelState>) { }

  updateParcelForm!: FormGroup;
  
id!:string
  ngOnInit(): void {
    this.store.select(getparcel_id).subscribe(x=>this.id=x)
    this.store.dispatch(ParcelActions.LoadParcels())
    this.updateParcelForm = this.fb.group({
      sender_details: [null, [Validators.required]],
      receiver_details: [null, [Validators.required]],
      parcel_id: [null, [Validators.required]],
      description: [null, [Validators.required]],
      weight: [null, [Validators.required]],
      status: [null, [Validators.required]],
    })
    // this.store.select(ParcelActions.SelectedId)
    // this.store.dispatch(ParcelActions.SelectedId({id:this.id}))
    this.store.select(getParcel).subscribe(parcel=>{
      if(parcel){
        this.updateParcelForm.patchValue({
          sender_details:parcel.sender_details,
          receiver_details:parcel.receiver_details,
          parcel_id:parcel.parcel_id,
          description:parcel.description,
          weight:parcel.weight,
          status:parcel.status

        })
      }
    })
  }

  onUpdate(){
    const updatedParcel:ParcelInterface={...this.updateParcelForm.value, id:this.id}
  this.store.dispatch(ParcelActions.UpdateParcel({updatedParcel}))
  this.store.dispatch(ParcelActions.LoadParcels())
  this.router.navigate(['/admin/dashboard'], {relativeTo:this.route})

  
  }

}
