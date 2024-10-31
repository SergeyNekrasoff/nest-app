import { Controller, Post, Body } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';

@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  async upload(@Body() createImageDto: CreateImageDto): Promise<{ id: number }> {
    const id = await this.imageService.uploadImageByUrl(createImageDto.url);
    return { id };
  }
}
