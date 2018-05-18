import { State, Store, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';

//Model
export class User {
  hawkId: string = '';
  univId: string = '';
  originalUser?: string | null = null;
  fullName: string = '';
}

//Actions
export class LoadUser {
  static readonly type = '[User] LoadUser';
}

//State
@State<User>({
  name: 'user',
  defaults: new User()
})
export class UserState implements NgxsOnInit  {

  constructor(private _httpClient: HttpClient) {  }

  ngxsOnInit(ctx: StateContext<User>) {
    //on application start, load user profile
    ctx.dispatch(new LoadUser());
  }

  @Selector()
  static IsAuthenticated(user: User) { return !!user.hawkId; }

  @Action(LoadUser)
  loadUser(ctx: StateContext<UserState>, action: LoadUser) {
    this._httpClient.get("account/user")
      .subscribe(data => {
        ctx.patchState(data)
      });
  }

}
