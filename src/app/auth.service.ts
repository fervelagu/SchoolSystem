import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import { map } from 'rxjs/operators'
import { Observable, of } from 'rxjs'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = "http://35.190.191.33:9001/schoolsystem/api/v1/oauth/"

  constructor(
    private http: Http,
    private router: Router
  ) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('me@fervelazq.com:3x4m3nfr0nt'));
  }

  loginService(auth): Observable<string> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(this.url, auth, {headers: headers})
    .pipe(map((res: Response) => res.json()))
 }

}
