import { ApiProperty } from '@nestjs/swagger';
import { UUID } from 'crypto';
import { NumericType } from 'typeorm';

export class CreateInvoiceDto {
  @ApiProperty()
  readonly id: UUID;

  @ApiProperty()
  readonly store: string;

  @ApiProperty()
  readonly invoiceStatus: string;

  @ApiProperty()
  readonly docNo: string;
  // types are invoce, pro-forma etc
  type: string;

  @ApiProperty()
  readonly customerId: string;

  @ApiProperty()
  readonly createdAt: Date;

  @ApiProperty()
  readonly status: string;

  @ApiProperty()
  readonly paidAt: Date;

  @ApiProperty()
  readonly dueAt: Date;

  @ApiProperty()
  readonly referenceDocNo: string;

  @ApiProperty()
  readonly currency: string;

  @ApiProperty()
  readonly exchangeRate: number;

  @ApiProperty()
  readonly discount: number;

  @ApiProperty()
  readonly additionalDiscount: number;

  @ApiProperty()
  readonly totalDiscount: number;

  @ApiProperty()
  readonly totalCharge: number;

  @ApiProperty()
  readonly roundingAmount: number;

  @ApiProperty()
  readonly totalTax: number;

  @ApiProperty()
  readonly additionalFee: number;

  @ApiProperty()
  readonly subTotal: number;

  @ApiProperty()
  readonly total: number;

  @ApiProperty()
  readonly totalExclTax: number;

  @ApiProperty()
  readonly totalNetAmount: number;
  
  @ApiProperty()
  readonly totalPayable: number;

  @ApiProperty()
  readonly billingDetail: number;

  @ApiProperty()
  readonly prePaymentDetail: number;

  @ApiProperty()
  readonly taxDetails: number;

  @ApiProperty()
  readonly paymentMode: number;

  @ApiProperty()
  readonly paymentTerms: string;

  @ApiProperty()
  readonly billReferenceNumber: string;

  @ApiProperty()
  readonly remarks: string;

  @ApiProperty()
  readonly created_at: Date;

  @ApiProperty()
  readonly updated_at: Date;
}
