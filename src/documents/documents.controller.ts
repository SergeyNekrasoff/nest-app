import { DocumentsService } from './documents.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateDocumentDto } from './dto/create-document.dto';

@Controller('documents')
export class DocumentController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post()
  create(@Body() createDocumentDto: CreateDocumentDto) {
    return this.documentsService.create(createDocumentDto);
  }

  @Get()
  findAll() {
    return this.documentsService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentsService.findOne(parseInt(id));
  }
  
  @Put(':id')
  update(@Param('id') id: string, updateDocumentDto: CreateDocumentDto) {
    return this.documentsService.update(parseInt(id), updateDocumentDto);
  }
  
  @Delete()
  delete(@Param('id') id: string) {
    return this.documentsService.remove(parseInt(id));
  }
}