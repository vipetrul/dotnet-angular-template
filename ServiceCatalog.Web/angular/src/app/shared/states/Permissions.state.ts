import { State, Store, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';

//Model
export class Permissions {
  canImpersonate: boolean = false;
}

//Actions
export class LoadPermissions {
  static readonly type = '[Permissions] LoadPermissions';
}

//State
@State<Permissions>({
  name: 'permissions',
  defaults: new Permissions()
})
export class PermissionsState  {

  constructor(private _httpClient: HttpClient) {  }

  @Selector()
  static CanImpersonate(permissions: Permissions) { return permissions.canImpersonate; }

  @Action(LoadPermissions)
  async loadUser(ctx: StateContext<Permissions>, action: LoadPermissions) {
    var data = await this._httpClient.get("api/Permissions").toPromise();
    ctx.patchState(data);
  }

}
