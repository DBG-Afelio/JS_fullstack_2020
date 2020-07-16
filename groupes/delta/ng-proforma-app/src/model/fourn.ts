import { FournDto } from './fournDto';
import { Product } from './product';

export class Fourn {
  products: Product[];

  constructor(
    public nom: string,
    public description: string,
    public ferme: boolean,
    public archive: boolean,
    public horaire: boolean[],
    public tel: string,
    public id?: number
  ) {
    this.id = id ? id : 0;
    this.nom = nom;
    this.description = description;
    this.ferme = ferme;
    this.archive = archive;
    this.horaire = horaire;
    this.tel = tel;
  }
  static fromDto(fournDto: FournDto): Fourn {
    return new Fourn(
      fournDto.nom,
      fournDto.description,
      fournDto.ferme,
      fournDto.archive,
      fournDto.horaire,
      fournDto.tel,
      fournDto.id
    );
  }
  toDto(): FournDto {
    return {
      id: this.id,
      nom: this.nom,
      description: this.description,
      ferme: this.ferme,
      archive: this.archive,
      horaire: this.horaire,
      tel: this.tel,
    };
  }

  setProducts(products: Product[]): Fourn {
    this.products = products;
    return this;
  }

  openToday(): boolean {
    const today = new Date();
    return this.horaire[today.getDay()] && !this.ferme;
  }

  updateDate(data): Fourn {
      this.nom = data.nom;
      this.description = data.description;
      this.archive = data.archive;
      this.ferme = data.ferme;
      this.horaire = data.horaire;
      this.tel = data.tel;
      return this;
  }
}
