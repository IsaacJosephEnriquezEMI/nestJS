import { UUID } from 'crypto';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column({})
  store: string;

  @Column({})
  invoiceStatus: string;

  @Column({ length: 30 })
  docNo: string;
  // types are invoce, pro-forma etc
  @Column()
  type: string;

  @Column()
  customerId: string;

  @CreateDateColumn({ type: 'timestamp with time zone' }) //yyyy-mm-dd hh:mm:ss
  createdAt: Date;

  @Column({}) // Default Open
  status: string;

  @Column({ type: 'timestamp with time zone' })
  paidAt: Date;

  @Column({ type: 'timestamp with time zone' })
  dueAt: Date;

  @Column({ length: 30 })
  referenceDocNo: string;

  @Column({ length: 3 })
  currency: string;

  @Column({ nullable: true })
  exchangeRate: number;

  @Column({ nullable: true })
  discount: number;

  @Column({})
  additionalDiscount: number;

  @Column({})
  totalDiscount: number;

  @Column({})
  totalCharge: number;

  @Column({})
  roundingAmount: number;

  @Column({})
  totalTax: number;

  @Column({})
  additionalFee: number;

  @Column({})
  subTotal: number;

  @Column({})
  total: number;

  @Column({})
  totalExclTax: number;

  @Column({})
  totalNetAmount: number;

  @Column({})
  totalPayable: number;

  @Column({})
  billingDetail: number;

  @Column({})
  prePaymentDetail: number;

  @Column({})
  taxDetails: number;

  @Column({})
  paymentMode: number;

  @Column({ length: 300 })
  paymentTerms: string;

  @Column({ length: 150 })
  billReferenceNumber: string;

  @Column({})
  remarks: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;
}
