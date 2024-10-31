import { Injectable } from '@nestjs/common';
import { ImageEntity } from './entities/image.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(ImageEntity)
    private readonly imageRepository: Repository<ImageEntity>,
  ) {}

  async uploadImageByUrl(url: string): Promise<number> {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const imageData = Buffer.from(response.data);
  
    const image = new ImageEntity();
    image.data = imageData;

    const savedImage = await this.imageRepository.save(image);
    return savedImage.id;
  }
}
