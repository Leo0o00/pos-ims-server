import { ApiProperty } from '@nestjs/swagger';
import { ResponseMetadata } from './response-metadata.dto';

export class ListResponseDto {
  @ApiProperty()
  total: number;
  @ApiProperty()
  meta: ResponseMetadata;
}
