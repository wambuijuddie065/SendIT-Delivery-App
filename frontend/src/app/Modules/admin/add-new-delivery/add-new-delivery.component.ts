import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ParcelInterface } from 'src/app/Interfaces/interfaces';
import { AdminService } from 'src/app/Services/admin.service';
import * as ParcelActions from '../AdminStates/parcel.action';
import { getClients, ParcelState } from '../AdminStates/parcel.reducer';

@Component({
  selector: 'app-add-new-delivery',
  templateUrl: './add-new-delivery.component.html',
  styleUrls: ['./add-new-delivery.component.css'],
})
export class AddNewDeliveryComponent implements OnInit {
  sender_details!: string;
  receiver_details!: string;
  pick_up!: string;
  destination!: string;
  description!: string;
  weight!: number;
  price!: number;
  status!: string;
  clients$ = this.store.select(getClients)

  constructor(
    private router: Router,
    private adminService: AdminService,
    private fb: FormBuilder,
    private store: Store<ParcelState>
  ) {}
  createParcelForm!: FormGroup;

  ngOnInit(): void {
    this.createParcelForm = this.fb.group({
      sender_details: ['select', [Validators.required]],
      receiver_details: ['select', [Validators.required]],
      pick_up: [null, [Validators.required]],
      destination: [null, [Validators.required]],
      description: [null, [Validators.required]],
      weight: [null, [Validators.required]],
      price: [null, [Validators.required]],
      status: [null, [Validators.required]],
    });
    this.getClientEmail()
  }
  onAdd() {
    const newParcel = this.createParcelForm.value;

    this.store.dispatch(ParcelActions.AddParcel({ newParcel }));
    this.store.dispatch(ParcelActions.LoadParcels());
    this.createParcelForm.reset();
    this.router.navigate(['/admin/dashboard']);
  }
  getClientEmail(){
    this.store.dispatch(ParcelActions.LoadClients())
  }
}
