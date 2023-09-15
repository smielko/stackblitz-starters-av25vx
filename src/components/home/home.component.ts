import { Component, OnInit } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { IHousingLocation } from '../../interfaces/ihousing-location';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true,
  imports: [
    HousingLocationComponent,
    CommonModule
  ],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}