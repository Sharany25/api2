import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auto, AutoDocument } from './schema/auto.schema';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';

@Injectable()
export class AutosService {
  constructor(@InjectModel(Auto.name) private autoModel: Model<AutoDocument>) {}

  async create(createAutoDto: CreateAutoDto): Promise<Auto> {
    const createdAuto = new this.autoModel(createAutoDto);
    return createdAuto.save();
  }

  async findAll(): Promise<Auto[]> {
    return this.autoModel.find().exec();
  }

  async findOne(id: string): Promise<Auto> {
    const auto = await this.autoModel.findById(id).exec();
    if (!auto) throw new NotFoundException('Auto no encontrado');
    return auto;
  }

  async update(id: string, updateAutoDto: UpdateAutoDto): Promise<Auto> {
    const auto = await this.autoModel.findByIdAndUpdate(id, updateAutoDto, { new: true }).exec();
    if (!auto) throw new NotFoundException('Auto no encontrado');
    return auto;
  }

  async remove(id: string): Promise<Auto> {
    const auto = await this.autoModel.findByIdAndDelete(id).exec();
    if (!auto) throw new NotFoundException('Auto no encontrado');
    return auto;
  }
}
