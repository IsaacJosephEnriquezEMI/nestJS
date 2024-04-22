import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CustomerService } from './customer.service'; // Import CustomerService from './customer.service'
import { Customer } from '../models/customer.entity';
import { CreateCustomerDto } from './dto/create-cutomer.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get(':tin')
  @ApiOperation({ summary: 'Query Customer' })
  async getCustomerById(@Param('tin') tin: string): Promise<Customer> {
    return this.customerService.getCustomerByTin(tin);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new customer' })
  @ApiBody({ 
    description: 'Data of the new customer',
    type: CreateCustomerDto 
  })
  async createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.createCustomer(createCustomerDto);
  }
}
