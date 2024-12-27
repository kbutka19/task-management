import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  path = `${environment.api}/login`;
  path1 = `${environment.api}/register`;
  constructor(private httpClient: HttpClient) {}

  //   login(request: any) {
  //     console.log(request);
  //     return this.httpClient
  //       .get(`${this.path}/login/?email=${request.email}&password=${request.password}`)
  //       .pipe(map((res) => res));
  //   }

  login(request: any) {
    console.log(request);
    return this.httpClient
      .post(this.path, { email: request.email, password: request.password })
      .pipe(map((res: any) => localStorage.setItem('token', res.accessToken)));
  }

  register(request: any) {
    console.log(request);
    return this.httpClient
      .post(this.path1, { email: request.email, password: request.password })
      .pipe(map((res: any) => localStorage.setItem('token', res.accessToken)));
  }

  getPost(request: any) {
    console.log(request);
    const headers = new HttpHeaders().set(
      'Authorization', `Bearer ${localStorage.getItem('token')}`,
    );
    console.log(headers);
    return this.httpClient
      .get(`${environment.api}/600/posts`, { headers: headers })
      .pipe(map((res) => res));
  }
}
