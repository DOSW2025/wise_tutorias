import { PartialType } from '@nestjs/mapped-types';
import { CreateTutoriaDto } from './create-tutoria.dto';

export class UpdateTutoriaDto extends PartialType(CreateTutoriaDto) {}
