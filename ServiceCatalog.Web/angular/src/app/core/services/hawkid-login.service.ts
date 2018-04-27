import { Injectable, Inject } from '@angular/core';
import { Location } from '@angular/common';

@Injectable()
export class HawkidLoginService {
  returnUri = '';
  constructor(@Inject('baseUri') private readonly baseUri: string) {
  }

  login(): string {
    window.location.href = Location.joinWithSlash(this.baseUri, `account/login?returnUri=${this.returnUri}`);
    return null;
  }

  logout(): string {
    window.location.href = Location.joinWithSlash(this.baseUri, `account/logout`);
    return null;
  }
}
