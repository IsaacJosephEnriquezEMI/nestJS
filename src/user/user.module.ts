import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { EncryptionService } from '../Utility/encryption.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../models/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, EncryptionService],
  controllers: [UserController],
})
export class UserModule {}
