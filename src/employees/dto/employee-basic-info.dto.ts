import { Expose } from 'class-transformer';

export class EmployeeBasicInfoDto {
  @Expose()
  first_name!: string;

  @Expose()
  last_name!: string;

  @Expose()
  employee_cid!: string;

  @Expose()
  pos_name!: string;

  @Expose()
  phone_number?: string | null;

  @Expose()
  img!: string | null;

  constructor(partial: Partial<EmployeeBasicInfoDto>) {
    Object.assign(this, partial);
  }
}
