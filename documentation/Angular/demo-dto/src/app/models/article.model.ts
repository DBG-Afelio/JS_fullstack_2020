import { ArticleDto } from '../article.dto';
import { Category } from './category.model';

export class Article {
  category: Category
  constructor(public id: number, public author: string, public name: string,
    public content: string, public date: Date, public cat_id: number){  }

  static fromDto(articleDto: ArticleDto): Article {
    return new Article(
      articleDto.id,
      articleDto.author,
      articleDto.name,
      articleDto.content,
      new Date(articleDto.published),
      articleDto.cat_id
      )
  }

  toDto(): ArticleDto {
    let dto: ArticleDto;
    dto = {
      id: this.id,
      author: this.author,
      name: this.name,
      content: this.content,
      published: this.date.toString(),
      cat_id: this.cat_id
    }
    return dto;
  }

  addCategory(category: Category){
    this.category = category;
  }
}
