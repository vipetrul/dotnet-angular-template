import { State, Store, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { LoadPermissions } from './Permissions.state';

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

  @Selector()
  static IsImpersonated(user: User) { return !!user.originalUser }

  @Action(LoadUser)
  async loadUser(ctx: StateContext<UserState>, action: LoadUser) {
    // As user loaded, we need to load permissions as well
    ctx.dispatch(new LoadPermissions());
    
    var newState = await this._httpClient.get<UserState>("account/user").toPromise();
    ctx.setState(newState);
  }

}
