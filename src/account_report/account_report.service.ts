import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Entity_Report } from "./account_report.entity";
import { Repository } from "typeorm";
import { CreateAccountReportDto } from "./dtos/create_account_report.dto";
import { Book } from "src/book/entities/book.entity";

@Injectable()
export class accountReportService{
    constructor(
        @InjectRepository(Entity_Report)
    private readonly accountReportRepository:Repository<Entity_Report>,
    @InjectRepository(Book)
    private readonly BookRepository:Repository<Book>
    
    ){}



    
    async create(dto:CreateAccountReportDto){
        const ac_name=await this.accountReportRepository.findOne({where:{account_name:dto.account_name}})
        if(ac_name && ac_name.id!==dto.id){
            throw new HttpException('Account name already exist', HttpStatus.CONFLICT);
        }
        const ac_repo=this.accountReportRepository.create(dto);
        return await this.accountReportRepository.save(ac_repo);       
    }

    findMany(){
    //     return this.accountReportRepository.find()
    //     const results =  this.accountReportRepository.query(query);
    // return results.map(result => result.invoice_id);

    const query = `
    SELECT book.name,account_report.account_name from book left join account_report  ON book.report_id=account_report.id 
  `;
  const results =  this.BookRepository.query(query);
  return results
    }

    findOne(id:string){
      
        return this.accountReportRepository.find({where:{id}})
    }

    async delete(id:string){
        const ac_repo=await this.accountReportRepository.findOne({where:{id}})
        return await this.accountReportRepository.remove(ac_repo);
    }



}