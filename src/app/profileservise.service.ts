import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Users } from "./users";
import { Repo } from "./repo";
@Injectable({
  providedIn: "root"
})
export class ProfileserviseService {
  user: Users;
  repo: Repo;
  apiKey = environment.apiKey;
  secretApi = `client_id=${environment.clientId}&client_secret=${
    environment.clientSecret
  }`;

  // userName: string;
  constructor(private http: HttpClient) {
    this.user = new Users("", "", "");
  }

  getUsers(text) {
    let searchApi = `https://api.github.com/search/users?q=${text}&access_token=${
      this.secretApi
    }`;
    return this.http.get(searchApi);
  }

  getRepos(text) {
    let searchApi = `https://api.github.com/search/repositories?q=${text}&sort=stars&order=desc&access_token=${
      this.secretApi
    }`;
    return this.http.get(searchApi);
    console.log(this.getRepos);
  }

  userRequest() {
    interface APIResponse {
      login: string;
      avatar_url: string;
    }
    const promise = new Promise((resolve, reject) => {
      this.http
        .get<APIResponse>(environment.apiurl)
        .toPromise()
        .then(
          response => {
            this.user.name = response.login;
            this.user.avatar = response.avatar_url;
            resolve();
          },
          error => {
            this.user.name = "cannot display user";
            this.user.avatar = "avatar cannot be displayed";
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
      this.http
        .get<APIResponse>(environment.repoapi)
        .toPromise()
        .then(
          response => {
            this.user.repos = response;
            resolve();
          },
          error => {
            this.user.repos = "repositories not available";
            reject(error);
          }
        );
    });
    return promise1;
  }
}
