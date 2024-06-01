// app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './database/database.module';
import { VehicleModule } from './vehicles/vehicle.module';
import { UsersModule } from './users/users.module';
import { RefuelsModule } from './refuels/refuels.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/fueltrack'),
    DatabaseModule,
    VehicleModule,
    UsersModule,
    RefuelsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
