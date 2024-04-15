import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { Customer } from '../models/customer.entity'; // Import your Customer entity

@Module({
  imports: [TypeOrmModule.forFeature([Customer])], // Import TypeOrmModule.forFeature and specify the entities
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService], // Export CustomerService if it needs to be used in other modules
})
export class CustomerModule {}
