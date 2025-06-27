import { IsNotEmpty, IsString } from 'class-validator';

export class CreateServicioDto {
    @IsString()
    @IsNotEmpty()
    tipo: string;
}