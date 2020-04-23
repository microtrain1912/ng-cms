import { Component, OnInit } from '@angular/core';

// 1. Import the UserService
import { UsersService } from '../users.service';

// 2. Import the User Object/Schema
import { User } from '../user';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // 3. Create a users property of type user
  users: User[];
  user: User;

  // 4. Inject the UsersService into the constructor
  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  // 6. Make a call to the service on initialization
  ngOnInit() {
    this.getUsers();
  }

  // 5. Create a local wrapper for
  getUsers(): void {
    this.usersService.getUsers().subscribe(
      (response:any) => {
        this.users = response.users
      }
    );
  }

  getUser(id): void {
    this.usersService.getUser(id).subscribe(
      (response:any) => {
        this.user = response.user
      }
    );
  }

  deleteUser(id: string): void {
    if (confirm("Are you sure to delete " + this.user.username)) {
      this.usersService.deleteUser(id).subscribe(
        () => { this.router.navigate(['/users']) }
      );
    }
  }

}