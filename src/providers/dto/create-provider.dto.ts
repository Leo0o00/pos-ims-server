import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateProviderDto {
    @IsString({
        message: 'The provider name must be a text string.'
    })
    @MinLength(2, {
        message: 'The provider name must be at least $constraint1 characters long.'
    })
    @MaxLength(45, {
        message: 'The provider name must be at most $constraint1 characters long.'
    })
    readonly name: string;

    // @IsPhoneNumber(, {
    //     message: 'The phone number must be a valid phone number.'
    // })
    @IsString({
        message: 'The phone number must be a text string.'
    })
    @Matches(/^\+\d{0,3}\s\d{1,13}$/, { // Regex para formato internacional E.164
        message: 'El número de teléfono debe ser válido (ej: +123 4567890)',
    })
    @MinLength(11, {
        message: 'The phone number must be at least $constraint1 characters long.'
    })
    @MaxLength(45, {
        message: 'The phone number must be at most $constraint1 characters long.'
    })
    readonly phone_number: string;

    @IsString({
        message: 'The email must be a text string.'
    })
    @IsEmail(undefined, {
        message: 'The email must be a valid email address.'
    })
    @MaxLength(100, {
        message: 'Email must not exceed $constraint1 characters.'
    })
    readonly email: string;
}
