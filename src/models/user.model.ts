// src/models/user.model.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  // Se houver relacionamentos com outros modelos, adicione-os aqui
}

export const UserModel = SchemaFactory.createForClass(User);
