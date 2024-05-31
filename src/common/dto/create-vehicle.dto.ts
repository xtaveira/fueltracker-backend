// src/dtos/create-vehicle.dto.ts

export class CreateVehicleDto {
  readonly modelName: string;
  readonly year: number;
  readonly plate: string;
  readonly owner: string;
}
