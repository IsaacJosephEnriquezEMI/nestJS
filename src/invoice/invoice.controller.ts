import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/get-invoice.dto';
import { Invoice } from '../models/invoice.entity';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

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

  @Post()
  @ApiOperation({ summary: 'Create a new Invoice Header' })
  @ApiBody({
    description: 'Data of the new Invoice Header',
    type: CreateInvoiceDto,
  })
  async createCustomer(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.invoiceService.createInvoice(createInvoiceDto);
  }
}
