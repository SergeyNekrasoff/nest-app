// import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
// import { DocumentsService } from './documents.service';
// import { Server } from 'socket.io';
// import { CreateDocumentDto } from './dto/create-document.dto';

// @WebSocketGateway()
// export class DocumentsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
//   @WebSocketServer()
//   server: Server;

//   constructor(private readonly documentsService: DocumentsService) {}

//   afterInit() {
//     this.server.emit('connected', 'Connected to the documents server');
//   }

//   handleConnection(client: any) {
//     console.log('Client connected');
//   }

//   handleDisconnect(client: any) {
//     console.log('Client disconnected');
//   }

//   async handleCreateDocument(id: any, createDocumentDto: CreateDocumentDto) {
//     const newDocument = await this.documentsService.create(id, createDocumentDto);
//     this.server.emit('documentCreated', newDocument);
//   }

//   async handleGetAllDocuments(client: any) {
//     const documents = await this.documentsService.findAll();
//     client.emit('allDocuments', documents);
//   }

//   async handleGetDocumentById(client: any, id: number) {
//     const document = await this.documentsService.findOne(id);
//     client.emit('documentById', document);
//   }

//   async handleUpdateDocument(client: any, id: number, updateDocumentDto: CreateDocumentDto) {
//     const updatedDocument = await this.documentsService.update(id, updateDocumentDto);
//     this.server.emit('documentUpdated', updatedDocument);
//   }

//   async handleRemoveDocument(client: any, id: number) {
//     await this.documentsService.remove(id);
//     this.server.emit('documentDeleted', { id });
//   }
// }
