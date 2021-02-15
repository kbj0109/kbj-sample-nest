import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('join')
  joinUser() {
    this.userService.joinUser();
  }

  @Get(':id')
  getUser() {
    this.userService.getUser();
  }

  @Put(':id')
  updateUser() {
    this.userService.updateUser();
  }

  @Delete(':id')
  deleteUser() {
    this.userService.deleteUser();
  }
}
