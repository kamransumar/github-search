import { Component, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";
import { ProfileserviseService } from "../../profileservise.service";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public userSearch: string;
  public userResults;
  public reposResults;

  constructor(public apiservice: ProfileserviseService) {}

  searchUsers() {
    this.apiservice.getUsers(this.userSearch).subscribe(data => {
      this.userResults = data;
      let users = [];
      for (let i = 0; i < 5; i++) {
        users.push(this.userResults.data[i].login);
      }
      console.log(users);
    });
    this.apiservice.getRepos(this.userSearch).subscribe(data => {
      this.userResults = data;
      console.log(this.reposResults);
    });
  }

  // lookUpUser() {
  //   this.apiservice.newUser(this.userName);
  //       this.apiservice.search().subscribe(response => {
  //         console.log(response);
  //         this.response = response;
  //       });
  //
  // this.apiservice.repoDisplay().subscribe(reporesponse => {
  //  console.log(reporesponse);
  //  this.reporesponse = reporesponse;
  // });
  // }
  ngOnInit() {}
}
