import { ApiProperty, PickType } from '@nestjs/swagger';
import { EmployeeListBasicInfoDto } from './employee-list-basic-info.dto';
import { ListResponseDto } from 'src/common/dto/list-response.dto';

export class EmployeeListResponseDto extends PickType(ListResponseDto, [
  'total',
  'meta',
] as const) {
  @ApiProperty({ type: [EmployeeListBasicInfoDto] })
  result: EmployeeListBasicInfoDto[];
}
