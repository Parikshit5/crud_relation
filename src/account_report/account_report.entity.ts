import { ApiProperty } from "@nestjs/swagger";
import { Book } from "src/book/entities/book.entity";
import {Column,CreateDateColumn,Entity, Generated, OneToMany, PrimaryColumn } from "typeorm";

@Entity({name:'account_report'})
export class Entity_Report{

    @ApiProperty()
    @PrimaryColumn({type:'uuid'})
    @Generated('uuid')
    id:string;
  
    @ApiProperty()
    @CreateDateColumn()
    start_date: Date;

    @ApiProperty()
    @CreateDateColumn()
    end_date: Date;

    @ApiProperty()
    @Column()
    account_id:string

    @ApiProperty()
    @Column()
    account_name:string

    @ApiProperty()
    @Column()
    budget_type:string

    @ApiProperty()
    @Column()
    account_type:string

    @ApiProperty()
    @Column()
    createdBy: string;

    @ApiProperty()
    @Column()
    updatedBy: string;

    @ApiProperty()
    @Column()
    deletedBy: string;

    @ApiProperty()
    @CreateDateColumn()
    created_on: Date;

    @ApiProperty()
    @CreateDateColumn()
    updated_on: Date;

    @ApiProperty()
    @Column({ type: 'boolean', default: false })
    is_deleted: boolean;

   
    @OneToMany(() => Book, book => book.report)
    books: Book[]; 

}