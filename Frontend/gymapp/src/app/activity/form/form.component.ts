import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators } from '@angular/forms';
import { ActivityService } from '../../services/activity/activity.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { Activity } from '../../entities/activity';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {

  validateForm: FormGroup;
  editActivityId: number;

  constructor(private fb: FormBuilder, private activityService: ActivityService,
    private router: Router, private msg: NzMessageService) {

      this.activityService.currentEvent.subscribe(
        res => {
          this.editActivityId = Number(res);
        }
      );
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title            : [ null, [ Validators.required ] ],
      description         : [ null, [ Validators.required ] ],
      place         : [ null, [ Validators.required ] ],
      imageUrl          : [ null, [ Validators.required ] ]
    });

    if (this.editActivityId) {
      this.activityService.get(this.editActivityId).subscribe(
        res => {
          const editActivity: Activity  = res[0] as Activity;
          this.validateForm.get('title').setValue(editActivity.title);
          this.validateForm.get('description').setValue(editActivity.description);
          this.validateForm.get('place').setValue(editActivity.place);
        }
      );
    }

  }

  ngOnDestroy(): void {
    this.activityService.changeEvent('');
  }

  submitForm(): boolean {

    const form = {
      title: this.validateForm.get('title').value,
      description: this.validateForm.get('description').value,
      place: this.validateForm.get('place').value,
      imageUrl: 'imagenUrl'
      // Arreglar cuando las imagenes esten solucionadas
      // imageUrl: this.validateForm.get('imageUrl').value
    };

    console.log(form);
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }

    for (const tes in form) {
      if (form[tes] === null || form[tes] === '') {
        return false;
      }
    }

    if (this.editActivityId) {
      form['id'] = this.editActivityId;
      this.activityService.edit(form).subscribe(
        res => {
          this.msg.success('Modificada nueva Actividad');
          this.router.navigate(['/board/admin/activity']);
        },
        err => {
          this.msg.error('Error al modificar la actividad');
        }
      );
    } else {
      this.activityService.add(form).subscribe(
        res => {
          this.msg.success('Añadida nueva Actividad');
          this.router.navigate(['/board/admin/activity']);
        },
        err => {
          this.msg.error('Error al añadir la actividad');
        }
      );
    }
  }

}
