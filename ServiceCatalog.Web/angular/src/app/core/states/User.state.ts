import { State, Store, Action, StateContext, Selector } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';

//Model
export class User {
  hawkId: string = '';
  univId: string = '';
  originalUser?: string | null
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
export class UserState {
  constructor(private _httpClient: HttpClient) {
    console.log("UserState constructor");
  }

  @Selector()
  static IsAuthenticated(user: User) { return !!user.hawkId; }

  @Action(LoadUser)
  loadUser(ctx: StateContext<UserState>, action: LoadUser) {
    console.log("loading user");
    let state = ctx.getState();
    console.log('original state', state);
    this._httpClient.get("account/user")
      .subscribe(data => {
        console.log('got user', data);
        Object.assign(state, data);
        console.log('new state', state);
        ctx.patchState(state)
      });
  }

}
