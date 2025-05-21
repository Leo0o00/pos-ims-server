import { ApiProperty } from '@nestjs/swagger';

export class ResponseMetadata {
  @ApiProperty()
  page: number;
  @ApiProperty()
  limit: number;
  @ApiProperty()
  totalPages: number;
}
