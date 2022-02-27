import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { CreateUser } from 'dto/create-user';
import { User } from 'query/entities';
import { UsersService } from 'services';

@Controller('/users')
export class UserController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.findAll();
  }

  @Get('/:id')
  getUser(@Param('id', ParseUUIDPipe) id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() user: CreateUser): Promise<User> {
    return this.usersService.create(user as User);
  }

  @Delete('/:id')
  async removeUser(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    await this.usersService.remove(id);
  }
}
