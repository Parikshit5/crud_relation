import { ApiProperty } from '@nestjs/swagger';

export class CreateAccountReportDto {
    // @ApiProperty({ description: 'The ID of the report' })
    id: string;

    // @ApiProperty({ description: 'The start date of the report' })
    start_date: Date;

    // @ApiProperty({ description: 'The end date of the report' })
    end_date: Date;

    @ApiProperty({ description: 'The account ID associated with the report' })
    account_id: string;

    @ApiProperty({ description: 'The name of the account associated with the report' })
    account_name: string;

    @ApiProperty({ description: 'The budget type of the account' })
    budget_type: string;

    @ApiProperty({ description: 'The type of the account' })
    account_type: string;

    @ApiProperty({ description: 'The user who created the report' })
    createdBy: string;

    @ApiProperty({ description: 'The user who last updated the report' })
    updatedBy: string;

    @ApiProperty({ description: 'The user who deleted the report' })
    deletedBy: string;

    // @ApiProperty({ description: 'The creation date of the report' })
    created_on: Date;

    // @ApiProperty({ description: 'The last update date of the report' })
    updated_on: Date;

    @ApiProperty({ description: 'Flag indicating whether the report is deleted' })
    is_deleted: boolean;
}
