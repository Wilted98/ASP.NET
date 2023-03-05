import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public accountService: AccountService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  login() {
    this.accountService.login(this.model).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        if (err.error.errors != undefined) {
          const { errors } = err.error;
          Object.keys(errors).map((eroare) => {
            this.toastr.error(errors[eroare]);
          });
        } else {
          this.toastr.error(err.error);
        }
      },
    });
  }

  logout() {
    this.accountService.logout();
  }
}
