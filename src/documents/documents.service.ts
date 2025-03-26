import { Document } from 'src/documents/entities/documents.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDocumentDto } from './dto/create-document.dto';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(Document)
    private readonly documentsRepository: Repository<Document>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(payload: CreateDocumentDto): Promise<Document> {
    const { title, content, userId } = payload
    const user = await this.usersRepository.findOneBy({ id: userId })

    if (!user) {
      throw new NotFoundException('User not found')
    }

    const document = this.documentsRepository.create({
      title,
      content,
      creator: user
    });

    return this.documentsRepository.save(document);
  }

  async findAll(): Promise<Document[]> {
    return this.documentsRepository.find();
  }

  async findOne(id: number): Promise<Document> {
    return this.documentsRepository.findOneBy({ id });
  }

  async update(id: number, payload: CreateDocumentDto): Promise<Document> {
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

  async findByTitle(title: string): Promise<Document[]> {
    try {
      const documents = await this.documentsRepository
        .createQueryBuilder('document')
        .where('LOWER(document.title) LIKE LOWER(:title)',
          { title: `%${title}%` })
        .getMany()
  
      return documents || []
    } catch (error) {
      throw new Error(`Search error: ${error.message}`)
    }
  }
}
