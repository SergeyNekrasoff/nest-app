import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsGateway } from './documents.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentEntity } from './entities/documents.entity';
import { DocumentController } from './documents.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentEntity])],
  controllers: [DocumentController],
  providers: [DocumentsGateway, DocumentsService],
})
export class DocumentsModule {}
