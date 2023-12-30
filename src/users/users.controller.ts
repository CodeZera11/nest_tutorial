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

@Controller('users')
export class UsersController {
  // Get all users /users
  //   @Get()
  //   findAll() {
  //     return [];
  //   }

  // Get with query params
  @Get()
  getUsers(@Query('role') role: 'ADMIN' | 'MANAGER') {
    return { role };
  }

  // Get One User /users/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  //   Post /users
  @Post()
  createUser(@Body() user: any) {
    return user;
  }

  //   Patch /users/:id
  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() user: any) {
    return { id, ...user };
  }

  //   Delete /users/:id
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return { response: `User with id ${id} deleted successfully` };
  }
}
