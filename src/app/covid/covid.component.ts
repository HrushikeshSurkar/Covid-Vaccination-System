import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  availableList: any = [
    {
      name: "Hrushikesh Surkar",
      age: 21
    },
    {
      name: "Pranali Surkar",
      age: 25
    },
    {
      name: "Priyanka Jumle",
      age: 27
    },
    {
      name: "Ashish Jumle",
      age: 29
    }
  ];
  selectedList: any = [];
  bookedList: any = [];

  addToDose1(i: any) {
    this.selectedList.push(this.availableList[i])
    this.availableList.splice(i, 1)
  }
  addToDose2(i: any) {
    this.bookedList.push(this.selectedList[i])
    this.selectedList.splice(i, 1)
  }

  backToBoosterDose(i: any) {
    this.availableList.push(this.selectedList[i])
    this.selectedList.splice(i, 1)
  }

  backToDose1(i: any) {
    this.selectedList.push(this.bookedList[i])
    this.bookedList.splice(i, 1)
  }


}

