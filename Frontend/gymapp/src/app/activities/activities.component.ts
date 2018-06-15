import { Component, OnInit } from '@angular/core';
import { Activity } from '../entities/activity';
import { ActivityService } from '../services/activity/activity.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {


  itemsActivities: Activity[];

  gridStyle = {
    width    : '25%',
    textAlign: 'center'
  };

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activityService.getAll().subscribe(
      res => {
        this.itemsActivities = res as Activity[];
      },
      err => {
        console.log(err);
      }
    );
  }

}
