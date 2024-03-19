import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entity_Report } from './account_report.entity';
import { AccountReportController } from './account_report.controller';
import { accountReportService } from './account_report.service';
import { AccountReportMiddleware } from './account_report.middleware';
import { BookService } from 'src/book/book.service';
import { Book } from 'src/book/entities/book.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Entity_Report,Book],),],
    controllers:[AccountReportController],
    providers:[accountReportService,BookService]
})
export class AccountReportModule {
    configure(consumer:MiddlewareConsumer){
        consumer.apply(AccountReportMiddleware).forRoutes('account_report');
    }
}
