import { Injectable } from '@nestjs/common';
import { CreateLabDto } from './dto/create-lab.dto';
import { UpdateLabDto } from './dto/update-lab.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LabEntity } from './entities/lab.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LabService {
  constructor(
    @InjectRepository(LabEntity)
        private readonly labRepository: Repository<LabEntity>,
  ){}
  
  create(createLabDto: CreateLabDto) {
    return 'This action adds a new lab';
  }

  async findAll() {
    return this.labRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} lab`;
  }

  update(id: number, updateLabDto: UpdateLabDto) {
    return `This action updates a #${id} lab`;
  }

  remove(id: number) {
    return `This action removes a #${id} lab`;
  }
}
