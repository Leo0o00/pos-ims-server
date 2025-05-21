import { ApiProperty } from '@nestjs/swagger';

export class EmployeeListBasicInfoDto {
  @ApiProperty()
  employee_id: string;
  @ApiProperty()
  CID: string;
  @ApiProperty()
  first_name: string;
  @ApiProperty()
  last_name: string;
  @ApiProperty()
  address: string;
  @ApiProperty({ type: String })
  phone_number: string | null;
  @ApiProperty()
  pos_name: string;
  @ApiProperty({ type: String })
  img: string | null;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  last_update: Date;
  @ApiProperty({ type: Date || 'null' })
  deleted_at: Date | null;
}
