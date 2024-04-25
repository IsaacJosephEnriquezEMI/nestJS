import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceDetailsService } from './invoice-details.service';
import { InvoiceDetailsController } from './invoice-details.controller';
import { InvoiceDetails } from '../models/invoiceDetails.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceDetails])],
  controllers: [InvoiceDetailsController],
  providers: [InvoiceDetailsService],
  exports: [InvoiceDetailsService],
})
export class InvoiceDetailsModule {}
