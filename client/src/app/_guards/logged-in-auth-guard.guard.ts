import { Injectable } from '@angular/core';
import { UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class LoggedInAuthGuardGuard {
  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.accountService.currentUser$.pipe(
      map((user) => {
        if (user) {
          this.toastr.error('You are already logged in!');
          return false;
        } else return true;
      })
    );
  }
}
