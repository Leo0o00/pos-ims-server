import { PartialType } from '@nestjs/mapped-types';
import { CreateProviderDto } from './create-provider.dto';
import { IsString, IsUUID } from 'class-validator';

export class UpdateProviderDto extends PartialType(CreateProviderDto) {
    @IsString({
        message: 'Product category id must be a text string.'
    })
    @IsUUID('all', {
        message: 'Provider id must be a valid UUID.'
    })
    provider_id: string;
}
