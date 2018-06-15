import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { User } from '../../entities/user';

@Component({
  selector: 'app-repertory',
  templateUrl: './repertory.component.html',
  styleUrls: ['./repertory.component.css']
})
export class RepertoryComponent implements OnInit {

  loading = true; // bug
  loadingMore = false;
  showLoadingMore = true;
  itemsActivities: User [] = [];

  constructor(private userService: UserService, private msg: NzMessageService,
    private router: Router) { }

  ngOnInit() {
    this.userService.getAll().subscribe(
      res => {
        this.itemsActivities = res as User[];
        this.loading = false;
      },
      err => {
        console.log(err);
      }
    );
  }

  onLoadMore(): void {
    this.loadingMore = true;
   /* this.userService.best().subscribe(
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
    );*/
  }

  edit(item: any): void {
    this.userService.changeEvent(item);
    this.router.navigate(['/board/admin/users/create']);
  }

  delete(item: any): void {
    console.log(item);
    this.userService.delete(item).subscribe(
      res => {
        console.log(res);
        const act: User[] = this.itemsActivities.filter((val) => val.iduser === item);
        this.msg.success('Borrado Usuario - ' + act[0].name);
        this.itemsActivities = this.itemsActivities.filter((val) => val.iduser !== item);
      },
      err => {
        console.log(err);
        this.msg.error('No se ha podido eliminar el usuario');
      }
    );
  }

}
