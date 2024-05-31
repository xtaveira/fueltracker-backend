import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleModule } from './vehicle/vehicle.module'; // Importe o módulo do veículo aqui

@Module({
  imports: [VehicleModule], // Adicione o módulo do veículo aqui
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
