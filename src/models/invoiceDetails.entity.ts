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

  @Column()
  taxRate: number;

  @Column()
  tax: number;

  @Column()
  taxExemptionReason: string;

  @Column()
  taxExemptionAmount: number;

  @Column()
  subtotal: number;

  @Column()
  total: number;

  @Column()
  quantity: number;

  @Column({ length: 5 })
  uom: string;

  @Column()
  discountRate: number;

  @Column()
  discount: number;

  @Column()
  chargeRate: number;

  @Column()
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
