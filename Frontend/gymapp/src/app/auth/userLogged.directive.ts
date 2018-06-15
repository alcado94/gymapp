import { Directive, OnInit, OnDestroy, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { Subscription } from 'rxjs/Subscription';

@Directive({
    selector: '[appUserLogged]'
  })
  export class UserLoggedDirective implements OnInit, OnDestroy {

    @Input('appUserLogged') appUserLogged: boolean;
    private permission$: Subscription;

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private loginService: LoginService) {
    }

    ngOnInit(): void {
      this.applyPermission();
    }

    private applyPermission(): void {

      if (this.appUserLogged === this.loginService.checkLogged()) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }

    }

    ngOnDestroy(): void {
    }

}
