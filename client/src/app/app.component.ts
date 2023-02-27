import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Hello, Mtrfckers!';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    return this.http.get('http://localhost:5271/api/users').subscribe({
      next: this.handleUpdateResponse.bind(this),
      error: this.handleError.bind(this),
    });
  }

  handleUpdateResponse(response: any) {
    this.users = response;
  }

  handleError(error: any) {
    console.log(error);
  }
}
