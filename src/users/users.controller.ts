import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // Get all users /users
  //   @Get()
  //   findAll() {
  //     return [];
  //   }

  // Get with query params
  @Get()
  getUsers(@Query('role') role: 'SIMPLE' | 'TEACHER' | 'CAPTAIN' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  // Get One User /users/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  //   Post /users
  @Post()
  createUser(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'SIMPLE' | 'TEACHER' | 'CAPTAIN' | 'ADMIN';
    },
  ) {
    return this.usersService.createUser(user);
  }

  //   Patch /users/:id
  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body()
    user: {
      name?: string;
      email?: string;
      role?: 'SIMPLE' | 'TEACHER' | 'CAPTAIN' | 'ADMIN';
    },
  ) {
    return this.usersService.updateUser(+id, user);
  }

  //   Delete /users/:id
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(+id);
  }
}
