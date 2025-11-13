import { TutoriasService } from './tutorias.service';
import { CreateTutoriaDto } from './dto/create-tutoria.dto';
import { UpdateTutoriaDto } from './dto/update-tutoria.dto';
export declare class TutoriasController {
    private readonly tutoriasService;
    constructor(tutoriasService: TutoriasService);
    create(createTutoriaDto: CreateTutoriaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTutoriaDto: UpdateTutoriaDto): string;
    remove(id: string): string;
}
