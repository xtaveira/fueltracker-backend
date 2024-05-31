import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RefuelsService } from './refuels.service';
import { RefuelsController } from './refuels.controller';
import { Refuel, RefuelModel } from '../models/refuel.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Refuel.name, schema: RefuelModel }]),
  ],
  providers: [RefuelsService],
  controllers: [RefuelsController],
})
export class RefuelsModule {}
