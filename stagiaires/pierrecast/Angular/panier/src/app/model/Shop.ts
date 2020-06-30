import { Article } from './Article';

export class Shop {
  private listArticles: Article[] = [];

  constructor(list: any[]) {
    list.forEach(element => {
      let article = new Article(element.id, element.titre, element.auteur, element.commentaire, element.Pays, this.getValidPrice(element.Prix), element.image);
      this.listArticles.push(article);
    });
  }

  public setListArticles(listArticles:Article[]) : void {
      this.listArticles = listArticles;
  }

  public getListArticles(): Article[] {
    return this.listArticles;
  }

  public getArticleById(id: number) : Article|undefined {
    return this.listArticles.find(article => article.getId() === id);
  }

  private getValidPrice(prix : string): number {
    return parseFloat(prix.split(' ')[0]);
  }
}
