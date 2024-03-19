import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';
import { AccountReportModule } from './account_report/account_report.module';
import { BookModule } from './book/book.module';

dotenv.config();
console.log("Database username:", process.env.USERNAME);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:process.env.HOST_NAME,
      port: Number(process.env.PORT_NAME),
      username: process.env.USERNAME1,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [join(process.cwd(),'dist/**/*.entity.js')],
      synchronize: true,
    }),
    AccountReportModule,
    BookModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
