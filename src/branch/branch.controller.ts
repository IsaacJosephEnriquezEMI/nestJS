import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { BranchService } from './branch.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { Branch } from 'src/models/branch.entity';

@Controller('branches')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @Post('')
  @ApiOperation({ summary: 'Create a new Branch' })
  @ApiBody({
    description: 'New Branch Details',
    type: CreateBranchDto,
  })
  async createBranch(@Body() createBranchDto: CreateBranchDto) {
    return this.branchService.createBranch(createBranchDto);
  }

  @Get('')
  @ApiOperation({ summary: 'Get Branch Detail' })
  async getAllBranches(): Promise<Branch[]> {
    return this.branchService.getAllBranch();
  }
}
