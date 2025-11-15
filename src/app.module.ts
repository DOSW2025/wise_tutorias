import { Module } from '@nestjs/common';
import { TutoriasModule } from './tutorias/tutorias.module';

@Module({
  imports: [TutoriasModule],
})
export class AppModule {}
