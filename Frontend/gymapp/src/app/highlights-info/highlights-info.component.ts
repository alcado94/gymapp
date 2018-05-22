import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlights-info',
  templateUrl: './highlights-info.component.html',
  styleUrls: ['./highlights-info.component.css']
})
export class HighlightsInfoComponent implements OnInit {

  infoarray = [
    {title:'ABOUT US', icon: 'anticon-info-circle-o'},
    {title:'NEW TO CROSSFIT', icon: 'anticon-calendar'},
    {title:'SCHEDULE', icon: 'anticon-calendar'},
    {title:'NUTRITION', icon: 'anticon-medicine-box'},
  ]
  constructor() { }

  ngOnInit() {
  }

}