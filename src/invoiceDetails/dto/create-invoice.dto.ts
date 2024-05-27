import { ApiProperty } from '@nestjs/swagger';
import { UUID } from 'crypto';

export class CreateInvoiceDetailsDto {
  @ApiProperty()
  readonly id: UUID;

  @ApiProperty()
  readonly invoiceNumber: string;

  @ApiProperty()
  readonly item: string;
  @ApiProperty()
  readonly classification: string;
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly unitCost: number;
  @ApiProperty()
  readonly taxType: string;
  @ApiProperty()
  readonly taxRate: number;
  @ApiProperty()
  readonly tax: number;
  @ApiProperty()
  readonly taxExemptionReason: string;
  @ApiProperty()
  readonly taxExemptionAmount: number;
  @ApiProperty()
  readonly subtotal: number;
  @ApiProperty()
  readonly total: number;
  @ApiProperty()
  readonly quantity: number;
  @ApiProperty()
  readonly uom: string;
  @ApiProperty()
  readonly discountRate: number;
  @ApiProperty()
  readonly discount: number;
  @ApiProperty()
  readonly chargeRate: number;
  @ApiProperty()
  readonly chargeAmount: number;
  @ApiProperty()
  readonly productTariffCode: string;
  @ApiProperty()
  readonly originCountry: string;

  @ApiProperty()
  readonly created_at: Date;

  @ApiProperty()
  readonly updated_at: Date;
}
