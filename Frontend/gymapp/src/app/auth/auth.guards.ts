import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            const roles: string[] = route.data.roles;

            if (roles) {

                const rolUser = localStorage.getItem('Roles');
                const rolUser2 = localStorage.getItem('tokenRol');

                if (roles.includes(rolUser2)) {
                    return true;
                } else {
                    this.router.navigate(['/board']);
                    return false;
                }

            } else {
                return true;
            }
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
