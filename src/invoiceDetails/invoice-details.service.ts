import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInvoiceDetailsDto } from './dto/create-invoice.dto'
import { Repository } from 'typeorm';
import { InvoiceDetails } from '../models/invoiceDetails.entity';

@Injectable()
export class InvoiceDetailsService {
  constructor(
    @InjectRepository(InvoiceDetails)
    private invoiceDetailsRepository: Repository<InvoiceDetails>,
  ) {}

  async getInvoiceDetails(invoiceNumber: string): Promise<InvoiceDetails[]> {
    return this.invoiceDetailsRepository
      .createQueryBuilder('invoiceDetails')
      .where('invoiceDetails.invoiceNumber = :invoiceNumber', { invoiceNumber })
      .getMany();
  }

  async createInvoiceDetails(
    createInvoiceDetailsDto: CreateInvoiceDetailsDto,
  ): Promise<InvoiceDetails> {
    const invoice = this.invoiceDetailsRepository.create(
      createInvoiceDetailsDto
    );
    return this.invoiceDetailsRepository.save(invoice);
  }
}