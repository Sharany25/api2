import { IsNotEmpty, IsString } from 'class-validator';  // Corrige la importación

export class CreateServicioDto {
    @IsString()
    @IsNotEmpty()
    tipo: string;
}