import { Component, OnInit } from '@angular/core';
import { Activity } from '../../entities/activity';
import { ActivityService } from '../../services/activity/activity.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repertory',
  templateUrl: './repertory.component.html',
  styleUrls: ['./repertory.component.css']
})
export class RepertoryComponent implements OnInit {

  loading = true; // bug
  loadingMore = false;
  showLoadingMore = true;
  itemsActivities: Activity [] = [];

  constructor(private activityService: ActivityService, private msg: NzMessageService,
    private router: Router) { }

  ngOnInit() {
    this.activityService.getAll().subscribe(
      res => {
        this.itemsActivities = res as Activity[];
        this.loading = false;
      },
      err => {
        console.log(err);
      }
    );
  }

  onLoadMore(): void {
    this.loadingMore = true;
    this.activityService.best().subscribe(
      res => {
        const rs = res as Activity[];

        for (let i = 0; i < rs.length; i++) {
            this.itemsActivities.push(rs[i]);
        }

        this.loadingMore = false;
      },
      err => {
        console.log(err);
      }
    );
  }

  edit(item: any): void {
    this.activityService.changeEvent(item);
    this.router.navigate(['/board/admin/activity/create']);
  }

  delete(item: any): void {

    this.activityService.delete(item).subscribe(
      res => {
        console.log(res);
        const act: Activity[] = this.itemsActivities.filter((val) => val.id === item);
        this.msg.success('Borrada Actividad - ' + act[0].title);
        this.itemsActivities = this.itemsActivities.filter((val) => val.id !== item);
      },
      err => {
        console.log(err);
        this.msg.error('No se ha podido eliminar la Actividad');
      }
    );
  }

}
