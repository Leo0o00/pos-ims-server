import { ApiProperty } from '@nestjs/swagger';

export class SimpleApiResponse {
  @ApiProperty()
  message: string;
}
