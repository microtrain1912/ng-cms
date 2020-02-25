import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  user: User = new User();
  error: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log("here");
    this.userService.logout().subscribe(
      (response: any) => {
        console.log(response);

        if (response.success == false) {
          this.error = true;
        }
      }
    );
  }
}