import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { DocumentEntity } from './entities/documents.entity';
export declare class DocumentController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    create(createDocumentDto: CreateDocumentDto): Promise<DocumentEntity>;
    findAll(): Promise<DocumentEntity[]>;
    search(title: string): Promise<DocumentEntity[]>;
    findOne(id: number): Promise<DocumentEntity>;
    update(id: number, payload: CreateDocumentDto): Promise<DocumentEntity>;
    delete(id: number): Promise<void>;
}
