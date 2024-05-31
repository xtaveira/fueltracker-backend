import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Vehicle extends Document {
  @Prop({ required: true })
  modelName: string;

  @Prop({ required: true })
  year: number;

  @Prop({ required: true, unique: true })
  plate: string;

  @Prop({ type: 'ObjectId', ref: 'User' })
  owner: string; // Referência ao ID do usuário proprietário

  // Outros campos e métodos podem ser adicionados aqui conforme necessário
}

export const VehicleModel = SchemaFactory.createForClass(Vehicle);
