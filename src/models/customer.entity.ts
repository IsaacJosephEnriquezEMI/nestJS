import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 30 })
  customerId: string;

  @Column({ length: 300 })
  name: string;

  @Column({ length: 320 })
  emailAddress: string;

  @Column({ type: 'jsonb', nullable: true })
  contactEmailAddress: Record<string, any>;

  @Column()
  type: string;

  @Column()
  paymentTermType: string;

  @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
  netPaymentTermDay: number;

  @Column({ length: 150, nullable: true })
  address1: string;

  @Column({ length: 150, nullable: true })
  address2: string;

  @Column({ length: 150, nullable: true })
  city: string;

  @Column({ length: 150, nullable: true })
  state: string;

  @Column({ length: 150, nullable: true })
  postalCode: string;

  @Column({ length: 3, nullable: true })
  country: string;

  @Column({ length: 150, nullable: true })
  deliveryAddress: string;

  @Column({ length: 15, nullable: true })
  phone: string;

  @Column({ length: 14, nullable: true })
  tin: string;

  @Column({ length: 20, nullable: true })
  registration: string;

  @Column({ length: 17, nullable: true })
  sst: string;

  @Column({ nullable: true })
  reference1: string;

  @Column({ nullable: true })
  reference2: string;

  @Column({ nullable: true })
  reference3: string;

  @Column({ nullable: true })
  note: string;

  @Column({ nullable: true })
  parentCustomerId: string;

  @Column({ nullable: true })
  accountManagerEmailAddress: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' }) 
  updated_at: Date;
}
