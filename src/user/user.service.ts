import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { db } from 'src/database/database.providers';

@Injectable()
export class UserService {
  constructor(private sequelize: Sequelize) {}

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

  async joinUser() {
    const kbj = await db.User.findAll();

    console.log('111', kbj);
    console.log('/user/join 들어옴');
  }
}
