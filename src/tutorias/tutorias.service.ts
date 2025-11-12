import { Injectable } from '@nestjs/common';
import { CreateTutoriaDto } from './dto/create-tutoria.dto';
import { UpdateTutoriaDto } from './dto/update-tutoria.dto';

@Injectable()
export class TutoriasService {
  create(createTutoriaDto: CreateTutoriaDto) {
    return 'This action adds a new tutoria';
  }

  findAll() {
    return `This action returns all tutorias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tutoria`;
  }

  update(id: number, updateTutoriaDto: UpdateTutoriaDto) {
    return `This action updates a #${id} tutoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} tutoria`;
  }
}
