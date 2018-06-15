import { Component, OnInit } from '@angular/core';
import { Activity } from '../entities/activity';
import { ActivityService } from '../services/activity/activity.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  infoarray = [
    {title:'ABOUT US', icon: 'anticon-info-circle-o'},
    {title:'NEW TO CROSSFIT', icon: 'anticon-calendar'},
    {title:'SCHEDULE', icon: 'anticon-calendar'},
    {title:'NUTRITION', icon: 'anticon-medicine-box'},
  ]

  itemsGrupal:Activity[];

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activityService.best().subscribe(
      res => {
        this.itemsGrupal = res as Activity[];
        this.itemsGrupal.forEach(item => item.imageUrl = 'https://unsplash.it/800/600?image=82')
      },
      err => {
        console.log(err);
      }
    )
  }

}
