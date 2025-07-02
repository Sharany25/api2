import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AutosModule } from './autos/autos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/examenLuis'),
    AutosModule,
  ],
})
export class AppModule {}
