import { CategoryDto } from '../category.dto';

export class Category {
  constructor(public id: number, public title: string){
  }
  static fromDto(catDto: CategoryDto): Category{
        return new Category(catDto.id, catDto.title);
  }
}
