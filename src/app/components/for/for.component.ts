import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  courses:string[];
  students:any[];
  color:string;
  fontSize:string;
  useTdata:boolean;
  classObj:Object;

  constructor() {
    this.courses=["Angular","React","Vue"];
    this.students=[{fName:"Dede",lName:"Lukmanul Hakim",score:"100"},
    {fName:"embe",lName:"kambing",score:"80"}];
    this.color="white"
    this.fontSize="40";
    this.useTdata=true;
    this.classObj={
      tdata:this.useTdata
    };
   }

  ngOnInit(): void {
  }

}
