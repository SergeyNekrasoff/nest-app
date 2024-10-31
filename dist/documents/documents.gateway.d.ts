import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { DocumentsService } from './documents.service';
import { Server } from 'socket.io';
import { CreateDocumentDto } from './dto/create-document.dto';
export declare class DocumentsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly documentsService;
    server: Server;
    constructor(documentsService: DocumentsService);
    afterInit(): void;
    handleConnection(client: any): void;
    handleDisconnect(client: any): void;
    handleCreateDocument(client: any, createDocumentDto: CreateDocumentDto): Promise<void>;
    handleGetAllDocuments(client: any): Promise<void>;
    handleGetDocumentById(client: any, id: number): Promise<void>;
    handleUpdateDocument(client: any, id: number, updateDocumentDto: CreateDocumentDto): Promise<void>;
    handleRemoveDocument(client: any, id: number): Promise<void>;
}
