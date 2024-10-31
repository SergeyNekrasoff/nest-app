import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
export declare class ImageController {
    private readonly imageService;
    constructor(imageService: ImageService);
    upload(createImageDto: CreateImageDto): Promise<{
        id: number;
    }>;
}
