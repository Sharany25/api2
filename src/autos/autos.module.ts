import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AutosService } from './autos.service';
import { AutosController } from './autos.controller';
import { Auto, AutoSchema } from './schema/auto.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Auto.name, schema: AutoSchema }])],
  controllers: [AutosController],
  providers: [AutosService],
})
export class AutosModule {}
