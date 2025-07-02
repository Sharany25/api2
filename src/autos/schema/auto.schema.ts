import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AutoDocument = Auto & Document;

@Schema()
export class Auto {
  @Prop({ required: true })
  kilometraje: number;

  @Prop({ required: true })
  modelo: string;

  @Prop({ required: true })
  tipoCombustible: string;

  @Prop({ required: true, unique: true })
  numeroSerie: string;

  @Prop({ type: [String], required: true, validate: arr => arr.length === 5 })
  imagenes: string[]; // URLs de las imágenes

  @Prop({ required: true })
  marca: string;

  @Prop({ required: true })
  anio: number;
}

export const AutoSchema = SchemaFactory.createForClass(Auto);
