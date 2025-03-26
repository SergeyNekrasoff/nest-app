import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { Document } from './entities/documents.entity';
export declare class DocumentController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    create(createDocumentDto: CreateDocumentDto): Promise<Document>;
    findAll(): Promise<Document[]>;
    search(title: string): Promise<Document[]>;
    findOne(id: number): Promise<Document>;
    update(id: number, payload: CreateDocumentDto): Promise<Document>;
    delete(id: number): Promise<void>;
}
