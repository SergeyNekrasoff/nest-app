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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const documents_service_1 = require("./documents.service");
const socket_io_1 = require("socket.io");
let DocumentsGateway = class DocumentsGateway {
    constructor(documentsService) {
        this.documentsService = documentsService;
    }
    afterInit() {
        this.server.emit('connected', 'Connected to the documents server');
    }
    handleConnection(client) {
        console.log('Client connected');
    }
    handleDisconnect(client) {
        console.log('Client disconnected');
    }
    async handleCreateDocument(client, createDocumentDto) {
        const newDocument = await this.documentsService.create(createDocumentDto);
        this.server.emit('documentCreated', newDocument);
    }
    async handleGetAllDocuments(client) {
        const documents = await this.documentsService.findAll();
        client.emit('allDocuments', documents);
    }
    async handleGetDocumentById(client, id) {
        const document = await this.documentsService.findOne(id);
        client.emit('documentById', document);
    }
    async handleUpdateDocument(client, id, updateDocumentDto) {
        const updatedDocument = await this.documentsService.update(id, updateDocumentDto);
        this.server.emit('documentUpdated', updatedDocument);
    }
    async handleRemoveDocument(client, id) {
        await this.documentsService.remove(id);
        this.server.emit('documentDeleted', { id });
    }
};
exports.DocumentsGateway = DocumentsGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], DocumentsGateway.prototype, "server", void 0);
exports.DocumentsGateway = DocumentsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(),
    __metadata("design:paramtypes", [documents_service_1.DocumentsService])
], DocumentsGateway);
//# sourceMappingURL=documents.gateway.js.map