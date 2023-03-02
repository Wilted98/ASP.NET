import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users: any;

  constructor(
    private http: HttpClient,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }

  getUsers() {
    return this.http.get('http://localhost:5271/api/users').subscribe({
      next: (res) => this.handleUpdateResponse(res),
      error: (err) => this.handleError(err),
    });
  }

  handleUpdateResponse(response: any) {
    this.users = response;
  }
  handleError(error: any) {
    console.log(error);
  }
}
