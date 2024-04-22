import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly customerId: string;


  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly emailAddress: string;

  @ApiProperty()
  readonly contactEmailAddress: Record<string, any>;

  @ApiProperty()
  readonly type: string;

  @ApiProperty()
  readonly paymentTermType: string;

  @ApiProperty()
  readonly netPaymentTermDay: number;

  @ApiProperty()
  readonly address1: string;

  @ApiProperty()
  readonly address2: string;

  @ApiProperty()
  readonly city: string;


  @ApiProperty()
  readonly state: string;

  @ApiProperty()
  readonly postalCode: string;

  @ApiProperty()
  readonly country: string;

  @ApiProperty()
  readonly deliveryAddress: string;

  @ApiProperty()
  readonly phone: string;

  @ApiProperty()
  readonly tin: string;

  @ApiProperty()
  readonly registration: string;

  @ApiProperty()
  readonly sst: string;

  @ApiProperty()
  readonly reference1: string;

  @ApiProperty()
  readonly reference2: string;

  @ApiProperty()
  readonly reference3: string;

  @ApiProperty()
  readonly note: string;

  @ApiProperty()
  readonly parentCustomerId: string;

  @ApiProperty()
  readonly accountManagerEmailAddress: string;
}