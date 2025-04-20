import { IsNotEmpty, IsString } from "class-validator";

export class DeletedImagesDto{
    @IsNotEmpty({message: 'Original size image name is required.'})
    @IsString({message: 'Original size image name must be a string.'})
    imageOriginalSizeName: string;
    
    // @IsNotEmpty({message: 'Thumbnail size image name is required.'})
    // @IsString({message: 'Thumbnail size image name must be a string.'})
    // imageThumbSizeName: string;
}