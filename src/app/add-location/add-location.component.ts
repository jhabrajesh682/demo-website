import { Component, OnInit } from '@angular/core';



interface location {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  selectedValue: string;
  selectedCar: string;
  selectedLocation:string
  locationObj: any = {}
 

  lat = 51.678418;
  lng = 7.809007;

  locations: location[] = [
    {value: 'Delhi', viewValue: 'Delhi'},
    {value: 'Mumbai', viewValue: 'Mumbai'},
    { value: 'kolkata', viewValue: 'Kolkata' },
     { value: 'chennai', viewValue: 'chennai' },
    { value: 'Bangalore', viewValue: 'Bangalore' },
      
  ];

  constructor() { }

  ngOnInit() {
  }


  locationSubmit() {
    
    let postObj = {
      location: this.locationObj.selectedLocation,
      restrictedTo: this.locationObj.restrictedTo,
      locationName:this.locationObj.restrictedTo
    }
  }
}
