import { User } from './../../models/user';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading = [false, false, false, false];
  value: string = '';
  form!: FormGroup;
  user!: User;
  userField: FormControl = new FormControl('');
  password: FormControl = new FormControl('');



  constructor(
    private authService: AuthService,
    private router: Router,
    
  ) { }

  ngOnInit(): void {
    if (this.authService.getAutenticado()) {
      this.router.navigate(['home']); 
    } else {
      this.router.navigate(['login']); 
    }
  }


  setUser() {
    this.user = new User();
    this.user.login = this.userField.value;
    this.user.password = this.password.value;
  }


  login(index: any) {
    this.loading[index] = true;
    setTimeout(() => this.loading[index] = false, 1000);
    this.setUser();
    console.log(this.user);
    
    this.authService.authLogin(this.user);
  }

}
