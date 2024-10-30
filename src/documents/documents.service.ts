import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DocumentEntity } from './entities/documents.entity';
import { Repository } from 'typeorm';
import { CreateDocumentDto } from './dto/create-document.dto';

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

  async update(id: number, updateDocumentDto: CreateDocumentDto): Promise<DocumentEntity> {
    const documentToUpdate = await this.findOne(id);
    
    if (!documentToUpdate) {
      throw new Error('Document not found');
    }

    Object.assign(documentToUpdate, updateDocumentDto);
    return this.documentsRepository.save(documentToUpdate);
  }

  async remove(id: number): Promise<void> {
    await this.documentsRepository.delete(id);
  }
}
