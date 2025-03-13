import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';
export declare class DocumentController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    create(createDocumentDto: CreateDocumentDto): Promise<import("./entities/documents.entity").DocumentEntity>;
    findAll(): Promise<import("./entities/documents.entity").DocumentEntity[]>;
    findOne(id: number): Promise<import("./entities/documents.entity").DocumentEntity>;
    update(id: number, payload: CreateDocumentDto): Promise<import("./entities/documents.entity").DocumentEntity>;
    delete(id: number): Promise<void>;
}
