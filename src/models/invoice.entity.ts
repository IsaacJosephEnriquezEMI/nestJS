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

  @Column({ type: 'varchar', length: 100 })
  branch: string;

  @Column({ type: 'varchar', length: 100 })
  // @OneToMany(
  //   () => InvoiceDetails,
  //   (invoiceDetails) => invoiceDetails.invoiceNumber,
  // )
  invoiceNumber: string;

  @Column({})
  processingStatus: string;

  @Column({ type: 'varchar', length: 100 })
  customerId: string;

  @Column({ type: 'char', length: 3 })
  currency: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  totalTax: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  totalNet: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  invoiceAmount: number;

  @Column({ type: 'timestamp with time zone' })
  invoiceDate: Date;

  @Column({ type: 'varchar', length: 255 })
  remarks: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdDate: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedDate: Date;
}
