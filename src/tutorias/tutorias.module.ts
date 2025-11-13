import { Module } from '@nestjs/common';
import { TutoriasService } from './tutorias.service';
import { TutoriasController } from './tutorias.controller';

@Module({
  controllers: [TutoriasController],
  providers: [TutoriasService],
})
export class TutoriasModule {}
