import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationUser } from '../models/application-user';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  private _user = new BehaviorSubject<ApplicationUser>(new ApplicationUser());
  user$: Observable<ApplicationUser> = this._user.asObservable();

  constructor(private readonly httpClient: HttpClient) {}

  getUser(): Promise<ApplicationUser> {
    let user = new ApplicationUser();
    return this.httpClient
      .get<ApplicationUser>('account/user')
      .toPromise()
      .then(x => {
        if (x) {
          user = new ApplicationUser(
            x.hawkId,
            x.originalUser
          );
        }
        this._user.next(user);
        return user;
      })
      .catch(() => {
        this._user.next(user);
        return user;
      });
  }
}
