import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Refuel } from '../models/refuel.model';
import { CreateRefuelDto } from '../common/dto/create-refuel.dto';

@Injectable()
export class RefuelsService {
  constructor(
    @InjectModel(Refuel.name) private readonly refuelModel: Model<Refuel>,
  ) {}

  async create(createRefuelDto: CreateRefuelDto): Promise<Refuel> {
    const createdRefuel = new this.refuelModel(createRefuelDto);
    return createdRefuel.save();
  }

  async findAll(): Promise<Refuel[]> {
    return this.refuelModel.find().exec();
  }

  async findOne(id: string): Promise<Refuel> {
    const refuel = await this.refuelModel.findById(id).exec();
    if (!refuel) {
      throw new NotFoundException(`Refuel with ID "${id}" not found`);
    }
    return refuel;
  }

  async update(id: string, updateRefuelDto: CreateRefuelDto): Promise<Refuel> {
    const existingRefuel = await this.refuelModel
      .findByIdAndUpdate(id, updateRefuelDto, { new: true })
      .exec();
    if (!existingRefuel) {
      throw new NotFoundException(`Refuel with ID "${id}" not found`);
    }
    return existingRefuel;
  }

  async remove(id: string): Promise<Refuel> {
    const deletedRefuel = await this.refuelModel
      .findOneAndDelete({ _id: id })
      .exec();
    if (!deletedRefuel) {
      throw new NotFoundException(`Refuel with ID "${id}" not found`);
    }
    return deletedRefuel;
  }
}
