import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import { CustomValidationPipe } from './custom.validation.pipe';
import { CreateUserDto } from './dto/create.user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('join')
  @UsePipes(CustomValidationPipe)
  joinUser(@Body() createUserDto: CreateUserDto) {
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
