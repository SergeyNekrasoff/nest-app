import { DocumentEntity } from './entities/documents.entity';
import { Repository } from 'typeorm';
import { CreateDocumentDto } from './dto/create-document.dto';
export declare class DocumentsService {
    private readonly documentsRepository;
    constructor(documentsRepository: Repository<DocumentEntity>);
    create(createDocument: CreateDocumentDto): Promise<DocumentEntity>;
    findAll(): Promise<DocumentEntity[]>;
    findOne(id: number): Promise<DocumentEntity>;
    update(id: number, payload: CreateDocumentDto): Promise<DocumentEntity>;
    remove(id: number): Promise<void>;
}
