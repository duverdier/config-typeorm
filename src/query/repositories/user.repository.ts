import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities';

@Injectable()
export class UserRepository {
  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }
  create(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
