import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InvoiceDetailsService } from './invoice-details.service'; // Import CustomerService from './customer.service'
import { CreateInvoiceDetailsDto } from './dto/create-invoice.dto';
import { InvoiceDetails } from '../models/invoiceDetails.entity';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { UUID } from 'crypto';

@Controller('invoice-details')
export class InvoiceDetailsController {
  constructor(private readonly invoiceDetailsService: InvoiceDetailsService) {}
  @Get(':invoiceNumber')
  @ApiOperation({ summary: 'Query Invoice Details' })
  async getInvoiceDetails(
    @Param('invoiceNumber') invoiceNumber: UUID,
  ): Promise<InvoiceDetails[]> {
    return this.invoiceDetailsService.getInvoiceDetails(invoiceNumber);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new Invoice Details' })
  @ApiBody({
    description: 'Data of the new Invoice Details',
    type: CreateInvoiceDetailsDto,
  })
  async createCustomer(
    @Body() createInvoiceDetailsDto: CreateInvoiceDetailsDto,
  ) {
    return this.invoiceDetailsService.createInvoiceDetails(
      createInvoiceDetailsDto,
    );
  }
}
