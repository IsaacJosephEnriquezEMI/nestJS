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

  @Column({ nullable: true })
  additionalDiscount: number;

  @Column({ nullable: true })
  totalDiscount: number;

  @Column({ nullable: true })
  totalCharge: number;

  @Column({ nullable: true })
  roundingAmount: number;

  @Column({ nullable: true })
  totalTax: number;

  @Column({ nullable: true })
  additionalFee: number;

  @Column({ nullable: true })
  subTotal: number;

  @Column({ nullable: true })
  total: number;

  @Column({ nullable: true })
  totalExclTax: number;

  @Column({ nullable: true })
  totalNetAmount: number;

  @Column({ nullable: true })
  totalPayable: number;

  @Column({ nullable: true })
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
