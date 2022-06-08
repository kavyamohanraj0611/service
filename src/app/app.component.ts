import { Component } from '@angular/core';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'service';
  users:any;
 
  constructor(private userData:UserService)
  {
    this.users=userData.users();
  }


}
