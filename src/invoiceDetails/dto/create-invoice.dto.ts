import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDecimal, IsString, Length } from 'class-validator';
import { UUID } from 'crypto';

export class CreateInvoiceDetailsDto {
  @ApiProperty({
    description: 'Invoice number',
    maxLength: 255,
  })
  @IsString()
  @Length(1, 255)
  invoiceNumber: UUID;

  @ApiProperty({
    description: 'Item Name',
    maxLength: 255,
  })
  @IsString()
  @Length(1, 255)
  item: string;

  @ApiProperty({
    description: 'Item Description',
    maxLength: 255,
  })
  @IsString()
  @Length(1, 255)
  description: string;

  @ApiProperty({
    description: 'Item Quantity',
    type: 'number',
    format: 'decimal',
  })
  @IsDecimal()
  quantity: number;

  @ApiProperty({
    description: 'Item Unit of Measure',
    maxLength: 255,
  })
  @IsString()
  @Length(1, 255)
  unitOfMeasure: string;

  @ApiProperty({
    description: 'Item Cost',
    type: 'number',
    format: 'decimal',
  })
  @IsDecimal()
  unitCost: number;

  @ApiProperty({
    description: 'Item Total Cost',
    type: 'number',
    format: 'decimal',
  })
  @IsDecimal()
  totalCost: number;

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
