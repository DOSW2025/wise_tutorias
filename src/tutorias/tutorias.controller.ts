import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TutoriasService } from './tutorias.service';
import { CreateTutoriaDto } from './dto/create-tutoria.dto';
import { UpdateTutoriaDto } from './dto/update-tutoria.dto';

@Controller('tutorias')
export class TutoriasController {
  constructor(private readonly tutoriasService: TutoriasService) {}

  @Post()
  create(@Body() createTutoriaDto: CreateTutoriaDto) {
    return this.tutoriasService.create(createTutoriaDto);
  }

  @Get()
  findAll() {
    return this.tutoriasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutoriasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTutoriaDto: UpdateTutoriaDto) {
    return this.tutoriasService.update(+id, updateTutoriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutoriasService.remove(+id);
  }
}
