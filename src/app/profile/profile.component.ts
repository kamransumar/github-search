import { Component, OnInit } from '@angular/core';
import {ProfileserviseService} from '../profileservise.service';
import {Users} from '../users';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileserviseService]
})
export class ProfileComponent implements OnInit {
 user: Users;
  constructor(private userServise: ProfileserviseService) { }


  ngOnInit() {
    this.userServise.userRequest();
    this.user = this.userServise.user;
  }

}
