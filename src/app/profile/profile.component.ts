import { Component, OnInit } from '@angular/core';
import {ProfileserviseService} from '../profileservise.service';
import {Users} from '../users';
import {Repo} from '../repo';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileserviseService]
})
export class ProfileComponent implements OnInit {
 user: Users;
 repo: Repo;
  constructor(private userServise: ProfileserviseService) { }


  ngOnInit() {
    this.userServise.userRequest();
    this.user = this.userServise.user;
    this.userServise.userRepoRequest();
    this.repo = this.userServise.repo;
  }

}
