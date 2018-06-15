import { Directive, OnInit, OnDestroy, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { LoginService } from '../services/login/login.service';

@Directive({
    selector: '[appRolesAccess]'
  })
  export class RolesAccessDirective implements OnInit, OnDestroy {

    @Input('appRolesAccess') appRolesAccess: string | string[];


    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private loginService: LoginService) {
    }

    ngOnInit(): void {
      this.applyPermission();
    }

    private applyPermission(): void {

      const rolUser = this.loginService.getRol();

      if (this.appRolesAccess.includes(rolUser)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }

    }

    ngOnDestroy(): void {
    }

}
