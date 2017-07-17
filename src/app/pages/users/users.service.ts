import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  smartTablePageSize = 10;

  usersData = [
    {
      id: 1,
      username:'oaile'
    },
    {
      id: 2,
      username:'vinhdiep'
    },
    {
      id: 3,
      username:'vietpham'
    }
  ];
}
