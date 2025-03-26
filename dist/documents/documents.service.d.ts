import { Document } from 'src/documents/entities/documents.entity';
import { CreateDocumentDto } from './dto/create-document.dto';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
export declare class DocumentsService {
    private readonly documentsRepository;
    private readonly usersRepository;
    constructor(documentsRepository: Repository<Document>, usersRepository: Repository<User>);
    create(payload: CreateDocumentDto): Promise<Document>;
    findAll(): Promise<Document[]>;
    findOne(id: number): Promise<Document>;
    update(id: number, payload: CreateDocumentDto): Promise<Document>;
    remove(id: number): Promise<void>;
    findByTitle(title: string): Promise<Document[]>;
}
