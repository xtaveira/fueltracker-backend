// src/dtos/update-vehicle.dto.ts

export class UpdateVehicleDto {
  readonly modelName?: string;
  readonly year?: number;
  readonly plate?: string;
  readonly owner?: string;
}
