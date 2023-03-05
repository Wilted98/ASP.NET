import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(
    public accountService: AccountService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: (res) => {
        console.log(res);
        this.cancel();
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

  cancel() {
    this.cancelRegister.emit();
  }
}
