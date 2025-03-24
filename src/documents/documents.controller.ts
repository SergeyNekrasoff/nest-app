import { DocumentsService } from './documents.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { CreateDocumentDto } from './dto/create-document.dto';
import { DocumentEntity } from './entities/documents.entity';

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
  
  @Get('search')
  search(@Query('title') title: string): Promise<DocumentEntity[]> {
    return this.documentsService.findByTitle(title);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.documentsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() payload: CreateDocumentDto
  ) {
    return this.documentsService.update(id, payload);
  }
  
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.documentsService.remove(id);
  }
}