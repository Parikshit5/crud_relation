import { Entity_Report } from "src/account_report/account_report.entity";
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity({name:'book'})
export class Book {

    @PrimaryColumn({type:'uuid'})
    @Generated('uuid')
    id:string;

    @Column()
    name:string;

    @Column()
    report_id:string;

    @ManyToOne(() => Entity_Report, obj => obj.id) // Use report => report.id to join on Entity_Report's id
    @JoinColumn({ name: 'report_id' }) // Join the report_id column in the Book table
    report: Entity_Report;
}
