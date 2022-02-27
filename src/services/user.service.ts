import { Injectable } from '@nestjs/common';
import { UserRepository } from 'query/repositories';
import { User } from '../query/entities';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UserRepository) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.remove(id);
  }

  create(user: User): Promise<User> {
    return this.usersRepository.create(user);
  }
}
