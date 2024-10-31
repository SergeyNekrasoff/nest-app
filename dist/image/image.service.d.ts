import { ImageEntity } from './entities/image.entity';
import { Repository } from 'typeorm';
export declare class ImageService {
    private readonly imageRepository;
    constructor(imageRepository: Repository<ImageEntity>);
    uploadImageByUrl(url: string): Promise<number>;
}
