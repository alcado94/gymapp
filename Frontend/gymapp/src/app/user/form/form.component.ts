import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { User } from '../../entities/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {

  validateForm: FormGroup;
  editUserId: number;

  constructor(private fb: FormBuilder, private activityService: UserService,
    private router: Router, private msg: NzMessageService) {

      this.activityService.currentEvent.subscribe(
        res => {
          this.editUserId = Number(res);
        }
      );
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name            : [ null, [ Validators.required ] ],
      pass         : [ null, [ Validators.required ] ],
      email         : [ null, [ Validators.required ] ],
      imageUrl          : [ null, [ Validators.required ] ]
    });

    if (this.editUserId) {
      this.activityService.get(this.editUserId).subscribe(
        res => {
          const editUser: User  = res[0] as User;
          this.validateForm.get('name').setValue(editUser.name);
          this.validateForm.get('pass').setValue(editUser.pass);
          this.validateForm.get('email').setValue(editUser.email);
        }
      );
    }

  }

  ngOnDestroy(): void {
    this.activityService.changeEvent('');
  }

  submitForm(): boolean {

    const form = {
      name: this.validateForm.get('name').value,
      pass: this.validateForm.get('pass').value,
      email: this.validateForm.get('email').value,
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

    if (this.editUserId) {
      form['id'] = this.editUserId;
      this.activityService.edit(form).subscribe(
        res => {
          this.msg.success('Modificado Usuario');
          this.router.navigate(['/board/admin/users']);
        },
        err => {
          this.msg.error('Error al modificar el usuario');
        }
      );
    } else {
      this.activityService.create(form).subscribe(
        res => {
          this.msg.success('Añadido nuevo Usuario');
          this.router.navigate(['/board/admin/users']);
        },
        err => {
          this.msg.error('Error al añadir el usuario');
        }
      );
    }
  }

}
