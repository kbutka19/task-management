import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl(undefined, Validators.required),
    password: new FormControl(undefined, Validators.required),
  });
  constructor(
    private authService: AuthService
  ) {
   
  }

  onLogin() {
    // this.authService
    //   .login(this.form.getRawValue())
    //   .pipe(tap((res) => console.log(res)))
    //   .subscribe();
      this.authService
      .getPost(this.form.getRawValue())
      .pipe(tap((res) => console.log(res)))
      .subscribe();
  }
}
