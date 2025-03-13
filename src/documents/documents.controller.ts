import { DocumentsService } from './documents.service';
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Put } from "@nestjs/common";
import { CreateDocumentDto, CreateDocumentPatchDto } from './dto/create-document.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('documents')
export class DocumentController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Public()
  @Post()
  create(@Body() createDocumentDto: CreateDocumentDto) {
    return this.documentsService.create(createDocumentDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.documentsService.findAll();
  }
  
  @Public()
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.documentsService.findOne(id);
  }
  
  @Public()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() payload: CreateDocumentDto
  ) {
    const updatedDocument = this.documentsService.update(id, payload);
    if (!updatedDocument) {
      throw new HttpException('Document not found', HttpStatus.NOT_FOUND);
    }

    return updatedDocument
  }
  
  @Public()
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.documentsService.remove(id);
  }
}