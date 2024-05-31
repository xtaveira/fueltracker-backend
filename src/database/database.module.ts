// database/database.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/fueltrack')],
  providers: [],
  exports: [MongooseModule],
})
export class DatabaseModule {}
