import { Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import { accountReportService } from "./account_report.service";
import { CreateAccountReportDto } from "./dtos/create_account_report.dto";
import {
    ApiBearerAuth,
    ApiBody,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';
import { Entity_Report } from "./account_report.entity";

//@ApiBearerAuth()
@ApiTags('account_report')
@Controller('account_report')
export class AccountReportController{
    constructor(private readonly accountReportService:accountReportService){}

    @Post('create')
    @ApiOperation({ summary: 'Create account-report' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiBody({ type: CreateAccountReportDto })
    create(@Body() dto:CreateAccountReportDto){
        // create(@Body() dto:CreateAccountReportDto){
        return this.accountReportService.create(dto)
    }

    @Get('/findOne/:id')
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: Entity_Report,
      })
    findOne(@Param('id') id:string){
        return this.accountReportService.findOne(id)
    }

    @Get('/findMany')
    findMany(){
        return this.accountReportService.findMany()
    }

    @Delete('/delete/:id')
    delete(@Param('id') id:string){
        return this.accountReportService.delete(id)
    }


}