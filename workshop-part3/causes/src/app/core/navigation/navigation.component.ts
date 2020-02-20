import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {

  get isLogged(){
    return this.userService.isLogged;
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
