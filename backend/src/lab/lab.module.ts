import { Module } from '@nestjs/common';
import { LabService } from './lab.service';
import { LabController } from './lab.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LabEntity } from './entities/lab.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LabEntity])],
  controllers: [LabController],
  providers: [LabService],
})
export class LabModule {}
