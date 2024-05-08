import { UUID } from 'crypto';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class InvoiceDetails {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column() //invoice id
  invoiceNumber: string;

  @Column()
  item: string;

  @Column({ length: 3 })
  classification: string;

  @Column({ length: 300 })
  description: string;

  @Column()
  unitCost: number;

  @Column({ length: 2 })
  taxType: string;

  @Column({ nullable: true })
  taxRate: number;

  @Column({ nullable: true })
  tax: number;

  @Column()
  taxExemptionReason: string;

  @Column()
  taxExemptionAmount: number;

  @Column({ nullable: true })
  subtotal: number;

  @Column({ nullable: true })
  total: number;

  @Column({ nullable: true })
  quantity: number;

  @Column({ length: 5 })
  uom: string;

  @Column({ nullable: true })
  discountRate: number;

  @Column({ nullable: true })
  discount: number;

  @Column({ nullable: true })
  chargeRate: number;

  @Column({ nullable: true })
  chargeAmount: number;

  @Column({ length: 12 }) // no . symbol)
  productTariffCode: string;

  @Column({ length: 3 })
  originCountry: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;
}
