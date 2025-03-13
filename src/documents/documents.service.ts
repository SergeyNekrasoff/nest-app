import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DocumentEntity } from './entities/documents.entity';
import { Repository } from 'typeorm';
import { CreateDocumentDto, CreateDocumentPatchDto } from './dto/create-document.dto';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(DocumentEntity)
    private readonly documentsRepository: Repository<DocumentEntity>,
  ) {}

  async create(createDocument: CreateDocumentDto): Promise<DocumentEntity> {
    const newDocument = this.documentsRepository.create(createDocument);
    return this.documentsRepository.save(newDocument);
  }

  async findAll(): Promise<DocumentEntity[]> {
    return this.documentsRepository.find();
  }

  async findOne(id: number): Promise<DocumentEntity> {
    return this.documentsRepository.findOneBy({ id });
  }

  async update(id: number, payload: CreateDocumentDto): Promise<DocumentEntity> {
    const document = await this.documentsRepository.findOne({
      where: { id }
    });
    
    if (!document) {
      throw new Error('Document not found');
    }

    Object.assign(document, payload);
    return this.documentsRepository.save(document);
  }

  async remove(id: number): Promise<void> {
    await this.documentsRepository.delete(id);
  }
}
