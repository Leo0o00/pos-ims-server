import { ApiProperty, PickType } from '@nestjs/swagger';
import { EmployeeListResponseDto } from './employee-list-response.dto';
import { SimpleApiResponse } from 'src/common/dto/simpleApiResponse';

export class EmployeesResponseDto extends PickType(SimpleApiResponse, [
  'message',
] as const) {
  @ApiProperty()
  data: EmployeeListResponseDto;
}
