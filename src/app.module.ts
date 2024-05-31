// app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/fueltrack'),
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
