import { Controller, Get, Param } from '@nestjs/common';
import { InvoiceDetailsService } from './invoice-details.service'; // Import CustomerService from './customer.service'
import { InvoiceDetails } from '../models/invoiceDetails.entity';
import { ApiOperation } from '@nestjs/swagger';
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
}
