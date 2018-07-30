import { State, Store, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { LoadPermissions } from './Permissions.state';
import { ServiceSearchResultViewModel } from '../models/ServiceSearchResultViewModal';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

//Model
export class ServicesStateModel{
  searchResult: ServiceSearchResultViewModel[] = [];
}


//Actions
export class SearchServices {
  static readonly type = '[Services] Search';
  constructor(public valueToSearch: string){}
}

//State
@State<ServicesStateModel>({
  name: 'serviceSearchResults',
  defaults: new ServicesStateModel()
})
export class ServicesState implements NgxsOnInit  {

  constructor(private _httpClient: HttpClient) {  }

  ngxsOnInit(ctx: StateContext<ServicesStateModel>) {
    ctx.dispatch(new SearchServices(""));
  }

  @Action(SearchServices, {cancelUncompleted : true})
  async Search(ctx: StateContext<ServicesStateModel>, action: SearchServices) {
    console.log("state got dispatch");
    
    var data = await this._httpClient
    .get<ServiceSearchResultViewModel[]>("api/Services",{params:{valueToSearch: action.valueToSearch}})
    .toPromise();

    ctx.setState ({... ctx.getState(), searchResult:data});
  }

}
