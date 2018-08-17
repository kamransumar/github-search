import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ProfileComponent} from './profile/ProfileComponent';

@Injectable({
  providedIn: 'root'
})
export class ProfileserviseService {

  constructor(private http: HttpClient) {this.users = new Users(); }
  userRequest() {
    interface APIResponse {
      user: string;
      avatar: string;
    }
  const promise = new Promise((resolve, reject) => {
     this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {
           this.user.quote = response.quote;
           this.user.author = response.author;
           resolve();
 },
       error => {
               this.quote.quote = 'Never, never, never give up.';
               this.quote.author = 'winston churchill';
               reject(error);
           }
       );
   });
   return promise;
  }
  }
