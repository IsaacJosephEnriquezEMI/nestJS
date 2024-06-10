import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/get-invoice.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { Invoice } from 'src/models/invoice.entity';


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

  // @Get(':status/:store')
  // @ApiOperation({ summary: 'Query Consolidated' })
  // async getInvoiceConsolidated(
  //   @Param('status') status: string,
  //   @Param('store') store: string,
  // ): Promise<string> {
  //   const initialList = await this.invoiceService.getInvoiceConsolidated(
  //     status,
  //     store,
  //   );

  //   const totalTotal = initialList.reduce(
  //     (sum, invoice) => sum + invoice.total,
  //     0,
  //   );
  //   const totalPayable = initialList.reduce(
  //     (sum, invoice) => sum + invoice.totalPayable,
  //     0,
  //   );
  //   const totalTax = initialList.reduce(
  //     (sum, invoice) => sum + invoice.totalTax,
  //     0,
  //   );

  //   // Add the total sum to the remarks of each invoice
  //   initialList.forEach((invoice) => {
  //     invoice.remarks = `Total sum of all invoices: ${totalTotal}`;
  //   });

  //   const transformedList = initialList.map((item) => ({
  //     item: item.docNo,
  //     classification: '022',
  //     description: item.docNo,
  //     quantity: 1,
  //     unitCost: item.totalPayable,
  //     uom: 'invoice',
  //     taxType: '01',
  //     taxRate: 0,
  //     discountRate: 0,
  //     discountAmount: 0,
  //     tax: 0,
  //     taxExemptionDetails: '',
  //     taxExemptionAmount: 0,
  //     discount: 0,
  //     chargeRate: 0,
  //     chargeAmount: 0,
  //     productTariffCode: 'testTariff',
  //     originCountry: 'MYS',
  //     subTotal: item.total,
  //     subTotalWithoutTax: item.total,
  //     total: item.total,
  //   }));

  //   const result = {
  //     store: '',
  //     docNo: '',
  //     customerId: '',
  //     status: '',
  //     paidAt: '',
  //     currency: '',
  //     totalTax: totalTax,
  //     total: totalTotal,
  //     TotalPayable: totalPayable,
  //     receiptDate: new Date(),
  //     invoice: transformedList,
  //   };

  //   const res = JSON.stringify(result);

  //   return res;
  // }

  @Post()
  @ApiOperation({ summary: 'Create a new Invoice Header' })
  @ApiBody({
    description: 'Data of the new Invoice Header',
    type: CreateInvoiceDto,
  })
  async createCustomer(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.invoiceService.createInvoice(createInvoiceDto);
  }

  // @Post()
  // @ApiOperation({ summary: 'Update Invoice Status' })
  // @ApiBody({
  //   description: 'UUID of Invoice',
  // })
  // async updateInvoiceStatus(@Param('id') id: UUID) {
  //   return this.invoiceService.updateInvoiceStatus(id)
  // }
}
