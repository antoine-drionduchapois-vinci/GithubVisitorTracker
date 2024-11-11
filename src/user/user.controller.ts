import { Controller, Get, Param } from '@nestjs/common';
import { User } from 'src/users-module/user.entity';
import { UsersService } from 'src/users-service/users.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAll(): Promise<User[]> {
    console.log('hrllo');
    return await this.usersService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<User> {
    return await this.usersService.findOne(id);
  }
}
