import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  get currentUser(){
    return this.userService.getCurrentUser;
  }

  logout(){
    this.userService.logout();
    this.router.navigate([""]);
  }

}
