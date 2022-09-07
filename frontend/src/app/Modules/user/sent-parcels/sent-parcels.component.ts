import { Component, OnInit } from '@angular/core';
import { ParcelInterface } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-sent-parcels',
  templateUrl: './sent-parcels.component.html',
  styleUrls: ['./sent-parcels.component.css']
})
export class SentParcelsComponent implements OnInit {
  parcelsArr:ParcelInterface[]=[]

  constructor() { }

  ngOnInit(): void {
  }

}
