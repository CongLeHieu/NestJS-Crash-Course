import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Le Hieu', email: 'lehieu@gmail.com' },
    { username: 'Le Hieu1', email: 'lehieu2@gmail.com' },
    { username: 'Le Hieu2', email: 'lehieu1@gmail.com' },
  ];

  fetchUser() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }

  fetchUserById(id: number) {
    return { id, username: 'Le Hieu123', email: 'lehie2u@gmail.com' };
  }
}
