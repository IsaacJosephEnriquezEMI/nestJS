import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerDto {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly email_address: string;
  @ApiProperty()
  readonly address1: string;
  @ApiProperty()
  readonly address2: string;
  @ApiProperty()
  readonly city: string;
  @ApiProperty()
  readonly state: string;
  @ApiProperty()
  readonly postal_code: string;
  @ApiProperty()
  readonly country: string;
  @ApiProperty()
  readonly phone: string;
}
