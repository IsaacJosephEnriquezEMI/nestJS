import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InvoiceDetails } from '../models/invoiceDetails.entity';
import { UUID } from 'crypto';

@Injectable()
export class InvoiceDetailsService {
  constructor(
    @InjectRepository(InvoiceDetails)
    private invoiceDetailsRepository: Repository<InvoiceDetails>,
  ) {}

  async getInvoiceDetails(invoiceNumber: UUID): Promise<InvoiceDetails[]> {
    return this.invoiceDetailsRepository
      .createQueryBuilder('invoiceDetails')
      .where('invoiceDetails.invoiceNumber = :invoiceNumber', { invoiceNumber })
      .getMany();
  }
}