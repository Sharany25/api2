import { IsNotEmpty, IsString } from "@nestjs/class-validator";

export class CreateServicioDto {
    @IsString()
    @IsNotEmpty()
    tipo: string;
}
