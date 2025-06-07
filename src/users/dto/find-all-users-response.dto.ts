import { MetaType } from '../../common/types/meta.type';
import { UserResponseDto } from './user.response.dto';

export class FindAllUsersResponseDto {
  total: number;
  result: UserResponseDto[];
  meta: MetaType;
}
