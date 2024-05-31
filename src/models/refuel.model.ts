// src/models/refuel.model.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Refuel extends Document {
  @Prop({ type: 'ObjectId', ref: 'Vehicle', required: true })
  vehicle: string; // Referência ao ID do veículo

  @Prop({ required: true })
  fuelQuantity: number;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  mileage: number;

  @Prop({ default: Date.now })
  refuelDate: Date;

  // Se houver relacionamentos com outros modelos, adicione-os aqui
}

export const RefuelModel = SchemaFactory.createForClass(Refuel);
