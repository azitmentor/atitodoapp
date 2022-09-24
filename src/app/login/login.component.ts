import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LoginModel } from '../models/loginmodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  item: LoginModel = new LoginModel();
  constructor(private ds: DataService) {}

  ngOnInit(): void {}

  login() {
    this.ds.login(this.item).subscribe((p) => {
      localStorage.setItem('token', p.token);
      console.log(p);
    });
  }
}
