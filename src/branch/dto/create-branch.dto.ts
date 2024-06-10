import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateBranchDto {
  @ApiProperty({ description: 'Branch Code', maxLength: 100 })
  @IsString()
  @Length(1, 100)
  readonly branchCode: string;

  @ApiProperty({ description: 'Branch Name', maxLength: 100 })
  @IsString()
  @Length(1, 100)
  readonly branchName: string;
}
