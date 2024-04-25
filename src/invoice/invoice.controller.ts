import { Controller, Get, Param } from '@nestjs/common';
import { InvoiceService } from './invoice.service'; // Import CustomerService from './customer.service'
import { Invoice } from '../models/invoice.entity';
import { ApiOperation } from '@nestjs/swagger';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get(':status/:docNo/:store')
  @ApiOperation({ summary: 'Query Invoice Adhoc' })
  async getInvoiceAdHoc(
    @Param('status') status: string,
    @Param('docNo') docNo: string,
    @Param('store') store: string,
  ): Promise<Invoice> {
    return this.invoiceService.getInvoiceAdhoc(status, docNo, store);
  }

  @Get(':status/:store')
  @ApiOperation({ summary: 'Query Consolidated' })
  async getInvoiceConsolidated(
    @Param('status') status: string,
    @Param('store') store: string,
  ): Promise<Invoice[]> {
    return this.invoiceService.getInvoiceConsolidated(status, store);
  }
}
