import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
// import { ProfileComponent } from './profile/profile.Component';
import {Users} from './users';
import {Repo} from './repo';
@Injectable({
  providedIn: 'root'
})
export class ProfileserviseService {
  user: Users;
  repo: Repo;
  constructor(private http: HttpClient) { this.user = new Users('', '', ''); }
  userRequest() {
    interface APIResponse {
      login: string;
      avatar_url: string;
    }
    const promise = new Promise((resolve, reject) => {
      this.http.get<APIResponse>(environment.apiurl).toPromise().then(response => {
        this.user.name = response.login;
        this.user.avatar = response.avatar_url;
        resolve();
      },
        error => {
          this.user.name = 'cannot display user';
          this.user.avatar = 'avatar cannot be displayed';
          reject(error);
        }
      );
    });
    return promise;
  }
  userRepoRequest() {
    interface APIResponse {
      repos_url: any;
    }
    const promise1 = new Promise((resolve, reject) => {
      this.http.get<APIResponse>(environment.repoapi).toPromise().then(response => {
        this.user.repos = response;
        resolve();
      },
        error => {
          this.user.repos = 'repositories not available';
          reject(error);
        }
      );
    });
    return promise1;
  }
}
