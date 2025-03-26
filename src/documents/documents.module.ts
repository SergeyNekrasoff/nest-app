import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Document } from './entities/documents.entity';
import { DocumentController } from './documents.controller';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Document])],
  controllers: [DocumentController],
  providers: [DocumentsService],
})
export class DocumentsModule {}
