import { Component, OnInit } from '@angular/core';
import { UserState, User } from '../shared/states/User.state';
import { Observable } from 'rxjs';
import { Select, Store, Actions } from '@ngxs/store';
import { Permissions, PermissionsState } from '../shared/states/Permissions.state';
import { ServicesState, SearchServices, ServicesStateModel } from '../shared/states/Services.state';
import { ofActionCanceled, ofActionErrored, ofActionDispatched, ofActionSuccessful } from '@ngxs/store/src/of-action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Select(UserState) user$: Observable<User>;
  @Select(PermissionsState) permissions$: Observable<Permissions>;
  @Select(ServicesState) servicesState$: Observable<ServicesStateModel>;
  isSearching: boolean = false;

  constructor(private store: Store, private actions$: Actions) { }

  search(valueToSearch:string){
    console.log("will dispatch", valueToSearch);
    this.store.dispatch(new SearchServices(valueToSearch))
  }

  ngOnInit() {
    this.actions$.pipe(ofActionDispatched(SearchServices)).subscribe(() => console.log('ofActionDispatched'));
    this.actions$.pipe(ofActionSuccessful(SearchServices)).subscribe(() => console.log('ofActionSuccessful'));
    this.actions$.pipe(ofActionCanceled(SearchServices)).subscribe(() => console.log('ofActionCanceled'));
    this.actions$.pipe(ofActionErrored(SearchServices)).subscribe(() => console.log('ofActionErrored'));
  }



}
