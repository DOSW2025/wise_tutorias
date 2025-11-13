import { CreateTutoriaDto } from './dto/create-tutoria.dto';
import { UpdateTutoriaDto } from './dto/update-tutoria.dto';
export declare class TutoriasService {
    create(createTutoriaDto: CreateTutoriaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTutoriaDto: UpdateTutoriaDto): string;
    remove(id: number): string;
}
