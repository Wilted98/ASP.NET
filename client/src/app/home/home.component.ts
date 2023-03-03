import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: User[] = [];

  constructor() {}
  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  ngOnInit(): void {}
}
