import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { InvoiceModule } from './invoice/invoice.module';
import { InvoiceDetailsModule } from './invoiceDetails/invoice-details.module';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config'
import { Customer } from './models/customer.entity';
import { Invoice } from './models/invoice.entity';
import { InvoiceDetails } from './models/invoiceDetails.entity';
import { UserModule } from './user/user.module';
import { BranchModule } from './branch/branch.module';
import { Branch } from './models/branch.entity';
import { User } from './models/user.entity';
// const PORT = Number(process.env.POSTGRES_PORT);
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [Customer, Invoice, InvoiceDetails, Branch, User],
      //synchronize: true, //to auto create/update table 
      ssl: true, //Reuired for Connection to hosted database
    }),
    CustomerModule,
    InvoiceModule,
    InvoiceDetailsModule,
    BranchModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
