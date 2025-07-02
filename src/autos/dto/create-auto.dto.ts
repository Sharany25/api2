import { IsString, IsNumber, IsArray, Length, IsUrl, ArrayMinSize, ArrayMaxSize } from 'class-validator';

export class CreateAutoDto {
  @IsNumber()
  kilometraje: number;

  @IsString()
  modelo: string;

  @IsString()
  tipoCombustible: string;

  @IsString()
  numeroSerie: string;

  @IsArray()
  @ArrayMinSize(5)
  @ArrayMaxSize(5)
  @IsString({ each: true })
  imagenes: string[]; // URLs

  @IsString()
  marca: string;

  @IsNumber()
  anio: number;
}
