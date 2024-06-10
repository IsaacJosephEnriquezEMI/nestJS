import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../models/user.entity';
import { CreateUserDto } from './dto/create-user.dto'; 
import { EncryptionService } from '../Utility/encryption.service';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly encryptionService: EncryptionService,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { passWord } = createUserDto;
    const hashedPassword = await this.encryptionService.hashPassword(passWord);
    const user = this.userRepository.create({
      ...createUserDto,
      passWord: hashedPassword,
    });
    return this.userRepository.save(user);
  }

  async validateUser(loginUserDto: LoginUserDto): Promise<User | null> {
    const { userName, passWord } = loginUserDto;
    const user = await this.userRepository.findOne({ where: { userName } });
    if (
      user &&
      (await this.encryptionService.comparePassword(passWord, user.passWord))
    ) {
      return user;
    }
    return null;
  }
}
