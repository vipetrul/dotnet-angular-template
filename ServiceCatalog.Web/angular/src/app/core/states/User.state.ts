import { State, Store, Action, StateContext } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';

//Model
export class User {
  constructor(
    public hawkId: string = 'sampleHawkId',
    public originalUser?: string | null
  ) { }

  isAuthenticated(): boolean {
    return !!this.hawkId;
  }

  isAdmin(): boolean {
    return false;
  }
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

  @Action(LoadUser)
  loadUser(ctx: StateContext<UserState>, action: LoadUser){
    console.log("loading user");
    this._httpClient.get("account/user").subscribe(data => { console.log('got user', data); ctx.patchState(data)});
  }

}
