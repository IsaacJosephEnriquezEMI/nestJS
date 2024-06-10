import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDecimal, IsDate, Length } from 'class-validator';

export class CreateInvoiceDto {
  @ApiProperty({ description: 'Branch of the invoice', maxLength: 12 })
  @IsString()
  @Length(1, 100)
  branch: string;

  @ApiProperty({ description: 'Invoice number', maxLength: 12 })
  @IsString()
  @Length(1, 12)
  invoiceNumber: string;

  @ApiProperty({ description: 'Processing status of the invoice' })
  @IsString()
  processingStatus: string;

  @ApiProperty({
    description: 'Smart Invoice Cutomer Id of the customer',
    type: 'string',
  })
  @IsString()
  @Length(1, 100)
  customerId: string;

  @ApiProperty({ description: 'Currency code', maxLength: 3 })
  @IsString()
  @Length(3, 3)
  currency: string;

  @ApiProperty({ description: 'Total tax', type: 'number', format: 'decimal' })
  @IsDecimal()
  totalTax: number;

  @ApiProperty({
    description: 'Total net amount',
    type: 'number',
    format: 'decimal',
  })
  @IsDecimal()
  totalNet: number;

  @ApiProperty({
    description: 'Invoice amount',
    type: 'number',
    format: 'decimal',
  })
  @IsDecimal()
  invoiceAmount: number;

  @ApiProperty({
    description: 'Date of the invoice',
    type: 'string',
    format: 'date-time',
  })
  @IsDate()
  invoiceDate: Date;

  @ApiProperty({ description: 'Remarks', maxLength: 255 })
  @IsString()
  @Length(0, 255)
  remarks: string;

  @ApiProperty({
    description: 'Creation date',
    type: 'string',
    format: 'date-time',
  })
  @IsDate()
  createdDate: Date;

  @ApiProperty({
    description: 'Last updated date',
    type: 'string',
    format: 'date-time',
  })
  @IsDate()
  updatedDate: Date;
}
