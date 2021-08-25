import { Module } from '@nestjs/common';
import { DataController } from './controller/data.controller';
import { DataService } from './service/data.service';

@Module({
  controllers: [DataController],
  providers: [DataService]
})
export class DataModule {}
