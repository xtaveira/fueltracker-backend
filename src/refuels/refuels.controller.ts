import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { RefuelsService } from './refuels.service';
import { CreateRefuelDto } from '../common/dto/create-refuel.dto';
import { Refuel } from '../models/refuel.model';

@Controller('refuels')
export class RefuelsController {
  constructor(private readonly refuelsService: RefuelsService) {}

  @Post()
  async create(@Body() createRefuelDto: CreateRefuelDto): Promise<Refuel> {
    return this.refuelsService.create(createRefuelDto);
  }

  @Get()
  async findAll(): Promise<Refuel[]> {
    return this.refuelsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Refuel> {
    return this.refuelsService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRefuelDto: CreateRefuelDto,
  ): Promise<Refuel> {
    return this.refuelsService.update(id, updateRefuelDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Refuel> {
    return this.refuelsService.remove(id);
  }
}
