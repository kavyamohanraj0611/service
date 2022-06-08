import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  users:any;

  constructor(private userData:UserService)
  {
    this.users=userData.users();
  }

  ngOnInit(): void {
  }

}
