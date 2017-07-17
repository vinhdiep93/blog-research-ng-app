import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
    selector:'blog',
    templateUrl:'./usersTable.html'
})

export class UsersComponent{
    usersData:Array<any>;

  constructor(private _usersService: UsersService) {
    this.usersData = _usersService.usersData;
  }
}