import { IsNotEmpty, IsDateString, IsNumber } from 'class-validator';

export class CreateRefuelDto {
  @IsNotEmpty()
  readonly vehicleId: string;

  @IsDateString()
  @IsNotEmpty()
  readonly date: Date;

  @IsNumber()
  @IsNotEmpty()
  readonly liters: number;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  readonly total: number;
}
