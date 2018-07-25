import { Component, OnInit } from '@angular/core';
import { UserState, User } from '../shared/states/User.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { Permissions, PermissionsState } from '../shared/states/Permissions.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Select(UserState) user$: Observable<User>;
  @Select(PermissionsState) permissions$: Observable<Permissions>;

  constructor() { }

  search(valueToSearch:string){
    console.log("Searching:", valueToSearch);
  }

  ngOnInit() {
  }



}
