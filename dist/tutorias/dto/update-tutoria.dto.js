"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTutoriaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tutoria_dto_1 = require("./create-tutoria.dto");
class UpdateTutoriaDto extends (0, mapped_types_1.PartialType)(create_tutoria_dto_1.CreateTutoriaDto) {
}
exports.UpdateTutoriaDto = UpdateTutoriaDto;
//# sourceMappingURL=update-tutoria.dto.js.map