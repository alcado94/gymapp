import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ActivityService {

  private eventEdit = new BehaviorSubject('');
  currentEvent = this.eventEdit.asObservable();

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:3000/activity');
  }

  get(id) {
    return this.http.get('http://localhost:3000/activity/' + id);
  }

  best() {
    return this.http.get('http://localhost:3000/activity/best');
  }

  add(activity) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    const body = this.serializeObj(activity);

    return this.http.post('http://localhost:3000/activity', body, { headers: headers });
  }

  edit(activity) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    const body = this.serializeObj(activity);

    return this.http.put('http://localhost:3000/activity/' + activity.id, body, { headers: headers });
  }

  delete(id) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    return this.http.delete('http://localhost:3000/activity/' + id, { headers: headers });
  }

  changeEvent(message: string) {
    this.eventEdit.next(message);
  }


  private serializeObj(obj) {
    // tslint:disable-next-line:prefer-const
    let result = [];
    // tslint:disable-next-line:forin
    for (const property in obj) {
        result.push(encodeURIComponent(property) + '=' + encodeURIComponent(obj[property]));
    }

    return result.join('&');
  }
}
