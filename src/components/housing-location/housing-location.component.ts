import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IHousingLocation } from '../../interfaces/ihousing-location';
@Component({
  selector: 'app-housing-location',
  standalone:true,
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent implements OnInit {
  @Input() housingLocation!: IHousingLocation;
  constructor() { }

  ngOnInit() {
  }

}