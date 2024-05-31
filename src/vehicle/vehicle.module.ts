// src/vehicle/vehicle.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleController } from '../controllers/vehicle.controller';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../models/vehicle.model'; // Importe o modelo Vehicle aqui

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vehicle.name, schema: Vehicle }]), // Use Vehicle diretamente como o esquema
  ],
  controllers: [VehicleController],
  providers: [VehicleService],
})
export class VehicleModule {}
