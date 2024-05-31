// database.service.ts

import { Injectable } from '@nestjs/common';
import { Connection } from 'mongoose';

@Injectable()
export class DatabaseService {
  constructor(private readonly connection: Connection) {}
}
