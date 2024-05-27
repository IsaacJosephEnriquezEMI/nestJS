import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInvoiceDto } from './dto/get-invoice.dto';
import { Repository } from 'typeorm';
import { Invoice } from '../models/invoice.entity';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>,
  ) {}

  async getInvoiceAdhoc(
    status: string,
    docNo: string,
    store: string,
  ): Promise<Invoice> {
    return this.invoiceRepository
      .createQueryBuilder('invoice')
      .where('invoice.status = :status', { status })
      .andWhere('invoice.docNo = :docNo', { docNo })
      .andWhere('invoice.store = :store', { store })
      .getOne();
  }

  async getInvoiceConsolidated(
    status: string,
    store: string,
  ): Promise<Invoice[]> {
    return this.invoiceRepository
      .createQueryBuilder('invoice')
      .where('invoice.status = :status', { status })
      .andWhere('invoice.store = :store', { store })
      .getMany();
  }
  async createInvoice(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    const invoice = this.invoiceRepository.create(createInvoiceDto);
    return this.invoiceRepository.save(invoice);
  }
}
