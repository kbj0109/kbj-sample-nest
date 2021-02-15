import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  deleteUser() {
    console.log('/user/delete 들어옴');
    throw new Error('Method not implemented.');
  }

  updateUser() {
    console.log('/user/:id update 들어옴');
    throw new Error('Method not implemented.');
  }

  getUser() {
    console.log('/user/:id get 들어옴');
    throw new Error('Method not implemented.');
  }

  joinUser() {
    console.log('/user/join 들어옴');
  }
}
