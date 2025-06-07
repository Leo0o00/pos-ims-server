import { PickType } from '@nestjs/swagger';
import { QueryParamsDto } from '../../common/dto/query-params.dto';

export class FindAllUsersQueryParamsDto extends PickType(QueryParamsDto, [
  'query',
  'page',
  'limit',
] as const) {}
