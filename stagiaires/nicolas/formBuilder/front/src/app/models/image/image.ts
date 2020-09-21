import { PixaBayImageDto } from '../interfaces/pixaBay-image-dto';

export class AppImage {

    constructor(

        private previewURL:string,
        private webformatURL:string,
        private largeImageURL:string,
        private tags:string,
        private type:string,

    ){}

    static fromDto(imageDto:PixaBayImageDto):AppImage{

        return new AppImage(imageDto.previewURL,imageDto.webformatURL,imageDto.largeImageURL,imageDto.tags,imageDto.type)

    }

}
