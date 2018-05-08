import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApplicationUser } from './core/models/application-user';
import { UserService } from './core/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  applicationName = 'ServiceCatalog';

  startTimer: boolean;
  private userSubscription: Subscription;

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.userSubscription = this.userService.user$.subscribe(user => {
      console.log(user);
      this.startTimer = user.isAuthenticated();
    });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
