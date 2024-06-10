import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInvoiceDto } from './dto/get-invoice.dto';
import { Repository } from 'typeorm';
import { Invoice } from '../models/invoice.entity';
// import { UUID } from 'crypto';

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
      .where('invoice.processingStatus = :status', { status })
      .andWhere('invoice.invoiceNumber = :docNo', { docNo })
      .andWhere('invoice.branch = :store', { store })
      .getOne();
  }

  // async getInvoiceConsolidated(
  //   status: string,
  //   store: string,
  // ): Promise<Invoice[]> {
  //   return this.invoiceRepository
  //     .createQueryBuilder('invoice')
  //     .where('invoice.status = :status', { status })
  //     .andWhere('invoice.store = :store', { store })
  //     .getMany();
  // }

  // async updateInvoiceStatus(id: UUID): Promise<Invoice> {
  //   await this.invoiceRepository
  //     .createQueryBuilder()
  //     .update(Invoice)
  //     .set({ status: 'Processing' })
  //     .where('id = :id', { id })
  //     .execute();

  //   return this.invoiceRepository.findOneBy({ id });
  // }

  async createInvoice(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    const invoice = this.invoiceRepository.create(createInvoiceDto);
    return this.invoiceRepository.save(invoice);
  }
}
