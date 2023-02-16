import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LoginModel } from '../models/loginmodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  item: LoginModel = new LoginModel();
  error = false;
  constructor(private ds: DataService, private router: Router) { }

  ngOnInit(): void { }

  login() {
    this.error = false;
    this.ds.login(this.item).subscribe((p) => {
      localStorage.setItem('token', p.token);
      //this.router.navigate(['/', {}]);
      this.router.navigateByUrl('/')
    }, (e) => this.error = true);
  }
}
