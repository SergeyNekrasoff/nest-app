"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsService = void 0;
const documents_entity_1 = require("./entities/documents.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const typeorm_2 = require("typeorm");
let DocumentsService = class DocumentsService {
    constructor(documentsRepository, usersRepository) {
        this.documentsRepository = documentsRepository;
        this.usersRepository = usersRepository;
    }
    async create(payload) {
        const { title, content, userId } = payload;
        const user = await this.usersRepository.findOneBy({ id: userId });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const document = this.documentsRepository.create({
            title,
            content,
            creator: user
        });
        return this.documentsRepository.save(document);
    }
    async findAll() {
        return this.documentsRepository.find();
    }
    async findOne(id) {
        return this.documentsRepository.findOneBy({ id });
    }
    async update(id, payload) {
        const document = await this.documentsRepository.findOne({
            where: { id }
        });
        if (!document) {
            throw new Error('Document not found');
        }
        Object.assign(document, payload);
        return this.documentsRepository.save(document);
    }
    async remove(id) {
        await this.documentsRepository.delete(id);
    }
    async findByTitle(title) {
        try {
            const documents = await this.documentsRepository
                .createQueryBuilder('document')
                .where('LOWER(document.title) LIKE LOWER(:title)', { title: `%${title}%` })
                .getMany();
            return documents || [];
        }
        catch (error) {
            throw new Error(`Search error: ${error.message}`);
        }
    }
};
exports.DocumentsService = DocumentsService;
exports.DocumentsService = DocumentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(documents_entity_1.Document)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], DocumentsService);
//# sourceMappingURL=documents.service.js.map