import { UUID } from 'crypto';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  customer_id: UUID;

  @Column({ nullable: true })
  tenant_id: UUID;

  @Column({})
  name: string;

  @Column({ nullable: true })
  email_address: string;

  @Column({})
  address1: string;

  @Column({})
  address2: string;

  @Column({})
  city: string;

  @Column({})
  state: string;

  @Column({})
  postal_code: string;

  @Column({})
  country: string;

  @Column({})
  phone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
